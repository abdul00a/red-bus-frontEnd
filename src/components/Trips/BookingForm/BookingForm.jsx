import React from 'react';
import { Modal, Button, Carousel } from 'antd';
import { connect } from 'react-redux';
import './BookingForm.css';
import {  typePhone, typeEMail } from '../../../actions/BookingsForm/BookingsForm';

class BookingForm extends React.Component {
  componentDidMount=()=>{

  }
  render() {
    return (
      <div>
        <Modal
          visible={true}
          title="Passenger's Information"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='630px'
          footer={[
            <Button key='back' type='danger'>
              Return
            </Button>,
            <Button key='submit' type='primary' loading={true}>
              Submit
            </Button>
          ]}
        >
          <form>
          <Carousel>
            </Carousel>
            <div className='contact-form'>
              <div className='input-box' id='phone-container'>
                <input type='text' className='input-field' id='phone' onChange={(event)=>this.props.typePhone(event.target.value)} />
                <label className='field-label'>PHONE</label>
              </div>
              <div className='input-box' id='email-container'>
                <input type='email' className='input-field' id='email' onChange={(event)=>this.props.typeEMail(event.target.value)} />
                <label className='field-label'>EMAIL ADDRESS</label>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    selectedSeats:state.bookingsForm.selectedSeats,
    seats: state.seatBooked.noOfSeats,
    display:state.bookingsForm.display,
    phone:state.bookingsForm.phone,
    eMail:state.bookingsForm.eMail,
  }
}

const mapDispatchToProps =(dispatch) =>{
  return{
    typePhone:(phone)=>dispatch(typePhone(phone)),
    typeEMail:(eMail)=>dispatch(typeEMail(eMail)),
  }
}

BookingForm = connect(mapStateToProps,mapDispatchToProps)(BookingForm);

export default BookingForm;
