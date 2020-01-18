import React, { Component } from 'react';
import { connect } from 'react-redux'
import FilterItem from './FilterItem/FilterItem';
import './Filters.css';
import { departBefore6, depart612, depart1218, departAfter18, typeAC, typeNonAC, typeSleeper, arriveBefore6, arrive612, arrive1218, arriveAfter18 } from '../../../actions/filters/filters';

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
                            <li><FilterItem filter='Before 06:00' onToggle={this.props.departBefore6}/></li>
                            <li><FilterItem filter='06:00 - 12:00' onToggle={this.props.depart612}/></li>
                            <li><FilterItem filter='12:00 - 18:00' onToggle={this.props.depart1218}/></li>
                            <li><FilterItem filter='After 18:00' onToggle={this.props.departAfter18}/></li>
                        </ul>
                    </div>
                    <div className='filter-box'>
                        <div className="filter-header">
                        Bus Types
                        </div>
                        <ul>
                            <li><FilterItem filter='Sleeper' onToggle={this.props.typeSleeper}/></li>
                            <li><FilterItem filter='AC' onToggle={this.props.typeAC}/></li>
                            <li><FilterItem filter='Non-AC' onToggle={this.props.typeNonAC}/></li>
                        </ul>
                    </div>
                    <div className='filter-box'>
                        <div className="filter-header">
                        Arrival Time
                        </div>
                        <ul>
                        <li><FilterItem filter='Before 06:00' onToggle={this.props.arriveBefore6}/></li>
                        <li><FilterItem filter='06:00 - 12:00' onToggle={this.props.arrive612}/></li>
                        <li><FilterItem filter='12:00 - 18:00' onToggle={this.props.arrive1218}/></li>
                        <li><FilterItem filter='After 18:00' onToggle={this.props.arriveAfter18}/></li>
                        </ul>
                    </div>
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
        departBefore6: (apply)=>dispatch(departBefore6(apply)),
        depart612: (apply)=>dispatch(depart612(apply)),
        depart1218: (apply)=>dispatch(depart1218(apply)),
        departAfter18: (apply)=>dispatch(departAfter18(apply)),
        typeAC: (apply)=>dispatch(typeAC(apply)),
        typeNonAC: (apply)=>dispatch(typeNonAC(apply)),
        typeSleeper: (apply)=>dispatch(typeSleeper(apply)),
        arriveBefore6: (apply)=>dispatch(arriveBefore6(apply)),
        arrive612: (apply)=>dispatch(arrive612(apply)),
        arrive1218: (apply)=>dispatch(arrive1218(apply)),
        arriveAfter18: (apply)=>dispatch(arriveAfter18(apply)),
    }
}

Filters=connect(mapStateToProps,mapDispatchToProps)(Filters);
 
export default Filters;