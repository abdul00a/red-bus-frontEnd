import React, { Component } from 'react';
import './Filters.css';
import FilterItem from './FilterItem/FilterItem';

class Filters extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="filters-container">
                    <div className='filter-box'>
                        <div className="filter-header">
                        Departure Time
                        </div>
                        <ul>
                            <li><FilterItem filter='Before 06:00' /></li>
                            <li><FilterItem filter='06:00 - 12:00' /></li>
                            <li><FilterItem filter='12:00 - 18:00' /></li>
                            <li><FilterItem filter='After 18:00' /></li>
                        </ul>
                    </div>
                    <div className='filter-box'>
                        <div className="filter-header">
                        Bus Types
                        </div>
                        <ul>
                            <li><FilterItem filter='Seater' /></li>
                            <li><FilterItem filter='Sleeper' /></li>
                            <li><FilterItem filter='AC' /></li>
                            <li><FilterItem filter='Non-AC' /></li>
                        </ul>
                    </div>
                    <div className='filter-box'>
                        <div className="filter-header">
                        Arrival Time
                        </div>
                        <ul>
                        <li><FilterItem filter='Before 06:00' /></li>
                        <li><FilterItem filter='06:00 - 12:00' /></li>
                        <li><FilterItem filter='12:00 - 18:00' /></li>
                        <li><FilterItem filter='After 18:00' /></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Filters;