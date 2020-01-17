import React, { Component } from 'react';
import './boiking_policy.css';
import { Row, Col } from 'antd';

class Booking_policy extends Component {
  render() {
    return (
      <div className="bkpolicy">
        <div>
          <Row className="poly-head">
            <Col span={12}>Time of Cancellation</Col>
            <Col span={6}>Deduction Percentage</Col>
            <Col span={6}>Cancellation Charges</Col>
          </Row>
          <div className="poly-detail">
            <Row className="sub-detail">
              <Col span={12}>Before 6 Days</Col>
              <Col span={6}>10%</Col>
              <Col span={6}>₹130 / 160 / 200</Col>
            </Row>
            <Row className="sub-detail">
              <Col span={12}>Before 5 days</Col>
              <Col span={6}>10%</Col>
              <Col span={6}>₹130 / 160 / 200</Col>
            </Row>
            <Row className="sub-detail">
              <Col span={12}>Before 4 days</Col>
              <Col span={6}>10%</Col>
              <Col span={6}>₹130 / 160 / 200</Col>
            </Row>
            <Row className="sub-detail">
              <Col span={12}>Before 3 days</Col>
              <Col span={6}>25%</Col>
              <Col span={6}>₹325 / 400 / 500</Col>
            </Row>
            <Row className="sub-detail">
              <Col span={12}>Before 2 Days</Col>
              <Col span={6}>50%</Col>
              <Col span={6}>₹650 / 800 / 1000</Col>
            </Row>
            <Row className="sub-detail">
              <Col span={12}>Before 1 Days</Col>
              <Col span={6}>75%</Col>
              <Col span={6}>₹1299 / 1599 / 1999</Col>
            </Row>
          </div>
        </div>
        <div>
          <div className="sub-txt">
            <span>RESCHEDULE</span>
          </div>
          <div className="bottm-txt">
            <div>
              Can be rescheduled <strong>12</strong> hours before departure from
              the first pick-up point. Reschedule fee <strong>129.90</strong>{' '}
              INRis applicable.
            </div>
            <div>
              If the new ticket you book is of lower amount than the previous
              booking, no amount will be refunded.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking_policy;
