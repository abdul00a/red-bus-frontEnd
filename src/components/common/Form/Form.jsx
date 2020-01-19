import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { toggleModify } from '../../../actions/TripModifyForm/TripModifyForm';
import { connect } from 'react-redux';
import SelectComponent from './SelectComponent/SelectComponent';
import './Form.css';
import {
  fetchCities,
  setDepartureDate,
  typeFrom,
  typeTo,
} from '../../../actions/Search/Search';
import { resetAnimateBus, animateBus } from '../../../actions/animateBus/animateBus';

class TripQueryForm extends Component {
  componentDidMount = () => {
    this.props.fetchCities();
  };

  onChangeDeparture = (date, dateString) => {
    this.props.setDepartureDate(dateString);
  };

  onChangeReturn = (date, dateString) => {
    this.props.setReturnDate(dateString);
  };

  searchRide = (event) => {
    event.preventDefault();
    if(this.props.fromLocation===this.props.toLocation)
    {
      alert('Sorry, we only provide inter-state bus services.');
    }
    if(!this.props.fromLocation)
    {
      alert('Please fill in the source location.');
      return(0);
    }
    if(!this.props.toLocation)
    {
      alert('Please fill in the destination location.');
      return(0);
    }
    if(!this.props.departureDate)
    {
      alert('Please fill in the departure date.');
      return(0);
    }
    this.props.busDepart();
    setTimeout(()=>{
      this.props.history.push(`/search?fromCityName=${this.props.fromLocation}&toCityName=${this.props.toLocation}&departureDate=${this.props.departureDate}`);
      this.props.busReset()
    },1100)
    if(this.props.modify)
    {
      this.props.toggleModify();
    }
}

  render() {
    return (
      <React.Fragment>
        <form onSubmit={(event)=>this.searchRide(event)}>
          <SelectComponent
            cities={this.props.cities}
            typeLocation={this.props.typeFrom}
            location={this.props.fromLocation}
            entity='departure'
            placeholder='From'
            style={{ width: 200 }}
          />
          <SelectComponent
            cities={this.props.cities}
            typeLocation={this.props.typeTo}
            location={this.props.toLocation}
            entity='arrival'
            placeholder='To'
            style={{ width: 200 }}
          />
          <DatePicker
            onChange={this.onChangeDeparture}
            placeholder='Departure date'
          />
          <Button htmlType='submit' className='trip-search-btn' type='danger'>
            Search Buses
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.search.cities,
    fromLocation:state.search.fromLocation,
    toLocation:state.search.toLocation,
    departureDate: state.search.departureDate,
    modify:state.modify,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    busDepart: ()=> dispatch(animateBus()),
    busReset: ()=>dispatch(resetAnimateBus()),
    fetchCities: () => dispatch(fetchCities()),
    typeFrom: location => dispatch(typeFrom(location)),
    typeTo: location => dispatch(typeTo(location)),
    setDepartureDate: date => dispatch(setDepartureDate(date)),
    toggleModify: () => dispatch(toggleModify())
  };
};

TripQueryForm = connect(mapStateToProps, mapDispatchToProps)(TripQueryForm);

export default withRouter(TripQueryForm);
