import React, { Component } from 'react';
import { Button } from 'antd';

class LocationHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='location'>{this.props.fromCityName}</div>
        &rarr;
        <div className='location'>{this.props.toCityName}</div>
        <Button className='modify-btn'>Modify</Button>
      </React.Fragment>
    );
  }
}

export default LocationHeader;
