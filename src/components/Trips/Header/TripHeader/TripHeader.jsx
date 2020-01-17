import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { toggleModify } from '../../../../actions/TripModifyForm/TripModifyForm';
import './TripHeader.css';

class TripHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      <div className="trip-header">
        <div className='info'>{this.props.fromCityName}</div>
        <span class="from-to-arr"><Icon type="arrow-right" /></span>
        <div className='info'>{this.props.toCityName}</div>
        <div className='depart-date'><Icon type="calendar" />{this.props.departureDate}</div>
        <Button className='modify-btn' onClick={this.props.toggleModify}>Modify</Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return{}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    toggleModify:()=>dispatch(toggleModify())
  }
}

TripHeader=connect(mapStateToProps,mapDispatchToProps)(TripHeader);

export default TripHeader;
