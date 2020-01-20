import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripQueryForm from '../../common/Form/Form';
import TripHeader from './TripHeader/TripHeader'
import './Header.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="location-header">
                {!this.props.modify&&<TripHeader fromCityName={this.props.fromCityName} toCityName={this.props.toCityName} departureDate={this.props.departureDate} returnDate={this.props.returnDate} />}
                {this.props.modify&&<TripQueryForm />}
            </div>
         );
    }
}

const mapStateToProps=(state)=>{
    return{
        modify:state.modify,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{}
}
 
Header=connect(mapStateToProps,mapDispatchToProps)(Header);

export default Header;