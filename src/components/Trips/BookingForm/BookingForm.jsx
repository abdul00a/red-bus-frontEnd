import React from 'react';
import { Modal, Button, Carousel } from 'antd';
import { connect } from 'react-redux';
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

  onChange(a, b, c) {
  console.log(a, b, c);
}

  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          visible={this.props.display}
          title="Passenger's Information"
          onOk={this.handleOk}
          onCancel={this.props.hideBookingForm}
          width='630px'
          footer={[
            <Button key='back' type='danger'>
              Return
            </Button>,
            <Button key='submit' type='primary'>
              Submit
            </Button>
          ]}
        >
          <form>
            <Carousel afterChange={this.onChange}>
            {this.props.selectedSeats.map((seat)=><Passengers key={seat.id} seat={seat}/>)}
            </Carousel>
            <div className='contact-form'>
              <div className='input-box' id='phone-container'>
                <input
                  type='text'
                  className='input-field'
                  id='phone'
                  onChange={event => this.props.typePhone(event.target.value)}
                />
                <label className='field-label'>PHONE</label>
              </div>
              <div className='input-box' id='email-container'>
                <input
                  type='email'
                  className='input-field'
                  id='email'
                  onChange={event => this.props.typeEMail(event.target.value)}
                />
                <label className='field-label'>EMAIL ADDRESS</label>
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
    hideBookingForm: ()=>dispatch(toggleDisplayBookingsForm()),
  };
};

BookingForm = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingForm;
