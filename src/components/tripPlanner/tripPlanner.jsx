import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusInfo from './busInfo/BusInfo';
import { reqBusDetail } from '../../actions/businfo/businfo';

const mapStateToProps = state => {
  return {
    busDetail: state.BusDetail.busDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusDetail: () => dispatch(reqBusDetail())
  };
};

class TripPlanner extends Component {
  componentDidMount() {
    this.props.RequestBusDetail();
  }
  render() {
    // console.log(this.props.busDetail);
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
