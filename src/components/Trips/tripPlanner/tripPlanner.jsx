import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusInfo from './busInfo/BusInfo';
import { reqBusDetail } from '../../../actions/businfo/businfo';
import { filterRemove } from '../../../actions/filters/filters';
import EmptyBus from './busInfo/emptyBus/emptybus';

const mapStateToProps = state => {
  return {
    busDetail: state.BusDetail.filteredBuses,
    filters: state.BusDetail.filters,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusDetail: (fromCityName, toCityName, departureDate) =>
      dispatch(reqBusDetail(fromCityName, toCityName, departureDate)),
    filterRemove: filters => dispatch(filterRemove(filters))
  };
};

class TripPlanner extends Component {
  constructor(){
    super();
    this.fetchingFlag=true;
  }
  componentDidMount() {
    this.props.RequestBusDetail(
      this.props.fromCityName,
      this.props.toCityName,
      this.props.departureDate
    )
  }
  componentDidUpdate = prevProps => {
    this.fetchingFlag=false;
    if (
      !(
        this.props.fromCityName === prevProps.fromCityName &&
        this.props.toCityName === prevProps.toCityName &&
        this.props.departureDate === prevProps.departureDate
      )
    ) {
      this.props.RequestBusDetail(
        this.props.fromCityName,
        this.props.toCityName,
        this.props.departureDate
      );
    }
    if (this.props.filters.length < prevProps.filters.length) {
      this.props.filterRemove(this.props.filters);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.busDetail.length !== 0 ? (
          this.props.busDetail.map(ele => (
            <BusInfo buses={ele} key={ele.busId} />
          ))
        ) : (this.fetchingFlag)?<div ide="loader" />:<EmptyBus />}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripPlanner);
