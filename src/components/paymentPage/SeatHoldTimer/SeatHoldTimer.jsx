import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { toggleExpireHoldTimer } from '../../../actions/AddBooking/AddBooking';

class SeatHoldTimer extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 60 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    if (!this.props.timerExpired) {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });
    if (seconds === 0) {
      this.props.toggleExpireTimer();
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <Icon type="clock-circle" className="clock" />
        <span className="contdown">
          {this.state.time.m}:{this.state.time.s}{' '}
          <span style={{ fontSize: '15px' }}>minutes left</span>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timerExpired: state.bookingData.holdTimerExpired
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleExpireTimer: () => dispatch(toggleExpireHoldTimer())
  };
};

SeatHoldTimer = connect(mapStateToProps, mapDispatchToProps)(SeatHoldTimer);

export default SeatHoldTimer;
