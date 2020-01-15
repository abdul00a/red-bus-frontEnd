import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import { withRouter } from "react-router-dom";
import SelectComponent from './SelectComponent/SelectComponent';
import './Form.css'


class TripQueryForm extends Component {
    onChangeDeparture=(date, dateString) => {
        console.log(date, dateString);
    }

    onChangeReturn=(date, dateString) => {
        console.log(date, dateString);
    }

    searchRide=()=>{}

    render() { 
        return ( 
            <React.Fragment>
            <form action={this.searchRide}>
                <SelectComponent cities={this.props.cities} entity="departure" placeholder="From" style={{ width: 200 }} />
                <SelectComponent cities={this.props.cities} entity="arrival" placeholder="To" style={{ width: 200 }} />
                <DatePicker onChange={this.onChangeDeparture} placeholder="Departure date" />
                <DatePicker onChange={this.onChangeReturn}  placeholder="Return date"/>
                <Button htmlType="submit" className="trip-search-btn"  type="danger">Search Buses</Button>
            </form>
            </React.Fragment>
         );
    }
}
 
export default TripQueryForm;