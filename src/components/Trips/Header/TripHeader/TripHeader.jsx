import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { toggleModify } from '../../../../actions/TripModifyForm/TripModifyForm';

class TripHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='info'>{this.props.fromCityName}</div>
        &rarr;
        <div className='info'>{this.props.toCityName}</div>
        <div className='info'>&uarr;{this.props.departureDate}</div>
        {this.props.returnDate&&<div className='info'>&darr; {this.props.returnDate}</div>}
        <Button className='modify-btn' onClick={this.props.toggleModify}>Modify</Button>
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
