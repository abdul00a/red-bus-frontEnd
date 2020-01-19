import React from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import './BookingForm.css';
import { typeLName, typeFName, typeGender, typeAge, typePhone, typeEMail } from '../../../actions/BookingsForm/BookingsForm';

class BookingForm extends React.Component {
  render() {
    return (
      <div>
        <Modal
          visible={false}
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
            <div className='donation-form'>
              <div className='input-box' id='fname-container'>
                <input type='text' className='input-field' id='fname' onChange={(event)=>this.props.typeFName(event.target.value)} />
                <label className='field-label'>FIRST NAME</label>
              </div>
              <div className='input-box' id='lname-container'>
                <input type='text' className='input-field' id='lname' onChange={(event)=>this.props.typeLName(event.target.value)} />
                <label className='field-label'>LAST NAME</label>
              </div>
              <div className='input-box' id='gender-container'>
                <input type='text' className='input-field' id='gender' onChange={(event)=>this.props.typeGender(event.target.value)} />
                <label className='field-label'>GENDER</label>
              </div>
              <div className='input-box' id='age-container'>
                <input type='text' className='input-field' id='age' onChange={(event)=>this.props.typeAge(event.target.value)} />
                <label className='field-label'>AGE</label>
              </div>
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
    seats: state.seatBooked.noOfSeats,
    fName:state.bookingsForm.fName,
    lName:state.bookingsForm.lName,
    gender:state.bookingsForm.gender,
    age:state.bookingsForm.age,
    phone:state.bookingsForm.phone,
    eMail:state.bookingsForm.eMail,
  }
}

const mapDispatchToProps =(dispatch) =>{
  return{
    typeLName:(lName)=>dispatch(typeLName(lName)),
    typeFName:(fName)=>dispatch(typeFName(fName)),
    typeGender:(gender)=>dispatch(typeGender(gender)),
    typeAge:(age)=>dispatch(typeAge(age)),
    typePhone:(phone)=>dispatch(typePhone(phone)),
    typeEMail:(eMail)=>dispatch(typeEMail(eMail)),
  }
}

BookingForm = connect(mapStateToProps,mapDispatchToProps)(BookingForm);

export default BookingForm;
