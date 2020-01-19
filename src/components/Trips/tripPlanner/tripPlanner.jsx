import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusInfo from './busInfo/BusInfo';
import { reqBusDetail } from '../../../actions/businfo/businfo';
import { filterRemove } from '../../../actions/filters/filters';

const mapStateToProps = state => {
  return {
    busDetail: state.BusDetail.filteredBuses,
    filters: state.BusDetail.filters
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusDetail: (fromCityName, toCityName, departureDate) =>
      dispatch(reqBusDetail(fromCityName, toCityName, departureDate)),
    filterRemove: filters => dispatch(filterRemove(filters))
  };
};

class TripPlanner extends Component {
  componentDidMount() {
    this.props.RequestBusDetail(
      this.props.fromCityName,
      this.props.toCityName,
      this.props.departureDate
    );
  }
  componentDidUpdate = prevProps => {
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
      <div>
        {this.props.busDetail.map(ele => (
          <BusInfo buses={ele} key={ele.busId} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripPlanner);
