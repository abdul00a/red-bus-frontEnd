import React, { Component } from 'react';
import { Button } from 'antd';
import Form from '../../common/Form/Form';
import LocationHeader from './LocationHeader/LocationHeader'
import './Header.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="location-header">
                {true&&<LocationHeader fromCityName={this.props.fromCityName} toCityName={this.props.toCityName} />}
                {false&&<Form cities={this.props.cities}/>}
            </div>
         );
    }
}
 
export default Header;