import React from 'react';
import { Row, Col } from 'antd';
import './busdetailheader.css';

const BusDetailHeader = () => {
  return (
    <div className="bus-route-head">
      <Row>
        <Col span={6}>Bus Service</Col>
        <Col span={2}>Departure</Col>
        <Col span={4} className="t-duration">
          Duration
        </Col>
        <Col span={4} style={{ margin: '0 3.6em 0 0.2em' }}>
          Arrival
        </Col>
        <Col span={4}>Fare</Col>
        <Col span={4}>Seats Available</Col>
      </Row>
    </div>
  );
};

export default BusDetailHeader;
