import React, { Component } from 'react';
import './boiking_policy.css';
import { Row, Col } from 'antd';

class Booking_policy extends Component {
  render() {
    return (
      <div className="bkpolicy">
        <div>
          <Row>
            <Col span={12}>Time of Cancellation</Col>
            <Col span={4}>Deduction Percentage</Col>
            <Col span={8}>Cancellation Charges</Col>
          </Row>
          <Row>
            <Col span={8}>Before 6 Days</Col>
            <Col span={8}>10%</Col>
            <Col span={8}>₹130 / 160 / 200</Col>
          </Row>
          <Row>
            <Col span={8}>
              After 16th Jan 08:25 PM & Before 20th Jan 08:25 PM
            </Col>
            <Col span={8}>10%</Col>
            <Col span={8}>₹130 / 160 / 200</Col>
          </Row>
          <Row>
            <Col span={8}>
              After 20th Jan 08:25 PM & Before 22nd Jan 08:25 PM
            </Col>
            <Col span={8}>10%</Col>
            <Col span={8}>₹130 / 160 / 200</Col>
          </Row>
          <Row>
            <Col span={8}>
              After 22nd Jan 08:25 PM & Before 23rd Jan 08:25 AM
            </Col>
            <Col span={8}>25%</Col>
            <Col span={8}>₹325 / 400 / 500</Col>
          </Row>
          <Row>
            <Col span={8}>
              After 23rd Jan 08:25 AM & Before 23rd Jan 02:25 PM
            </Col>
            <Col span={8}>50%</Col>
            <Col span={8}>₹650 / 800 / 1000</Col>
          </Row>
          <Row>
            <Col span={8}>
              After 23rd Jan 02:25 PM & Before 23rd Jan 08:25 PM
            </Col>
            <Col span={8}>100%</Col>
            <Col span={8}>₹1299 / 1599 / 1999</Col>
          </Row>
        
        </div>
        <div>
          <span>RESCHEDULE</span>
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
    );
  }
}

export default Booking_policy;
