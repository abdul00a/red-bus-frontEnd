import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import './Passenger.css'
import { typePassengerName, typePassengerGender, typePassengerAge } from '../../../../actions/BookingsForm/BookingsForm';

class Passengers extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="passenger-form">
          <div id="info-box-title"><span className="passenger-title">Passenger{" "+this.props.index+1}</span><span className="passenger-seat-title">{" | "+this.props.seat.seatName+" | "+this.props.seat.seatType}{(this.props.seat.isWindowSeat!=="No")?" | Window":""}</span></div>
          <div className="input-box" id="name-container">
          <label className="passenger-field-label">NAME</label>
            <input
              type="text"
              className="passenger-input-field"
              id="name"
              placeholder="Name"
              onChange={event =>
                this.props.typePassengerName(
                  event.target.value,
                  this.props.seat.id
                )
              }
            />
          </div>
          <div className='input-box' id='gender-container'>
          <label className='passenger-field-label'>GENDER</label>
          <Radio.Group onChange={(event)=>this.props.typePassengerGender(event.target.value,this.props.seat.id)} value={this.props.gender}>
          <Radio value={'Male'}>Male</Radio>
          <Radio value={'Female'}>Female</Radio>
        </Radio.Group>
          </div>
          <div className="input-box" id="age-container">
          <label className="passenger-field-label">AGE</label>
            <input
              type="text"
              className="passenger-input-field"
              id="age"
              placeholder="Age"
              onChange={event =>
                this.props.typePassengerAge(
                  event.target.value,
                  this.props.seat.id
                )
              }
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
    return{
      gender:state.bookingsForm.selectedSeats.filter(seat=>seat.id===ownProps.seat.id)[0].gender,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    typePassengerName: (fName, seatId) =>
      dispatch(typePassengerName(fName, seatId)),
    typePassengerGender: (gender, seatId) =>
      dispatch(typePassengerGender(gender, seatId)),
    typePassengerAge: (age, seatId) => dispatch(typePassengerAge(age, seatId))
  };
};

Passengers = connect(mapStateToProps, mapDispatchToProps)(Passengers);

export default Passengers;
