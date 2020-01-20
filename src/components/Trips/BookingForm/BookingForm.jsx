import React from 'react';
import { Modal, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './BookingForm.css';
import {
  typePhone,
  typeEMail,
  populateSeats,
  toggleDisplayBookingsForm
} from '../../../actions/BookingsForm/BookingsForm';
import Passengers from './Passenger/Passenger';

class BookingForm extends React.Component {
  componentDidUpdate = () => {
    if (this.props.selectedSeats.length !== this.props.seats.length) {
      this.props.populateSelectedSeats(this.props.seats);
    }
  };

  proceedToPay = () => {
    this.props.history.push('/payment');
  };

  render() {
    return (
      <div>
        <Modal
          visible={this.props.display}
          title="Passenger Details"
          onOk={this.handleOk}
          onCancel={this.props.hideBookingForm}
          width='630px'
          style={{top:"0px",right:"-637.5px"}}
          bodyStyle={{height:"860px"}}
          footer={
            <Button htmlType='submit' onClick={this.proceedToPay} className='trip-search-btn' type='danger'>
              Proceed to pay
            </Button>
          }
        >
          <form onSubmit={this.proceedToPay} className="passenger-details">
          <span className="form-title"><Icon type="user" />&nbsp;Pasenger's Information</span>
            {this.props.selectedSeats.map((seat,index)=><Passengers key={seat.id} index={index} seat={seat}/>)}
            <div className="form-title"><Icon type="mail" />&nbsp;Contact Information</div>
            <div className='contact-form'>
              <div className='input-box' id='phone-container'>
              <label className="field-label">PHONE</label>
                <input
                  type="text"
                  className="input-field"
                  id="phone"
                  placeholder="Phone"
                  onChange={event => this.props.typePhone(event.target.value)}
                />
                
              </div>
              <div className="input-box" id="email-container">
              <label className="field-label">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="input-field"
                  id="email"
                  placeholder="E-mail"
                  onChange={event => this.props.typeEMail(event.target.value)}
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedSeats: state.bookingsForm.selectedSeats,
    seats: state.seatBooked.numOfSeat,
    display: state.bookingsForm.display,
    phone: state.bookingsForm.phone,
    eMail: state.bookingsForm.eMail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    populateSelectedSeats: seats => dispatch(populateSeats(seats)),
    typePhone: phone => dispatch(typePhone(phone)),
    typeEMail: eMail => dispatch(typeEMail(eMail)),
    hideBookingForm: () => dispatch(toggleDisplayBookingsForm())
  };
};

BookingForm = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default withRouter(BookingForm);
