import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import './Passenger.css'
import { typePassengerLName, typePassengerFName, typePassengerGender, typePassengerAge } from '../../../../actions/BookingsForm/BookingsForm';

class Passengers extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='passenger-form'>
        <div className='passenger-form-title'>{this.props.seat.seatName}</div>
          <div className='input-box' id='fname-container'>
            <input
              type='text'
              className='passenger-input-field'
              id='fname'
              onChange={event => this.props.typePassengerFName(event.target.value,this.props.seat.id)}
            />
            <label className='passenger-field-label'>FIRST NAME</label>
          </div>
          <div className='input-box' id='lname-container'>
            <input
              type='text'
              className='passenger-input-field'
              id='lname'
              onChange={event => this.props.typePassengerLName(event.target.value,this.props.seat.id)}
            />
            <label className='passenger-field-label'>LAST NAME</label>
          </div>
          <div className='input-box' id='gender-container'>
          <Radio.Group onChange={(event)=>this.props.typePassengerGender(event.target.value,this.props.seat.id)} value={this.props.gender}>
          <Radio value={'Male'}>Male</Radio>
          <Radio value={'Female'}>Female</Radio>
        </Radio.Group>
            <label className='passenger-field-label'>GENDER</label>
          </div>
          <div className='input-box' id='age-container'>
            <input
              type='text'
              className='passenger-input-field'
              id='age'
              onChange={event => this.props.typePassengerAge(event.target.value,this.props.seat.id)}
            />
            <label className='passenger-field-label'>AGE</label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
    return{
      gender:state.bookingsForm.selectedSeats.filter(seat=>seat.id===ownProps.seat.id)[0].gender
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        typePassengerFName:(fName, seatId)=>dispatch(typePassengerFName(fName, seatId)),
        typePassengerLName:(lName, seatId)=>dispatch(typePassengerLName(lName, seatId)),
        typePassengerGender:(gender, seatId)=>dispatch(typePassengerGender(gender, seatId)),
        typePassengerAge:(age, seatId)=>dispatch(typePassengerAge(age, seatId)),
    }
}

Passengers=connect(mapStateToProps,mapDispatchToProps)(Passengers);

export default Passengers;
