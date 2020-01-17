import React from 'react';
import { Row, Col } from 'antd';
import './busdetailheader.css'

const BusDetailHeader = () => {
  return (
    <div className="bus-route-head">
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={2}>col-6</Col>
        <Col span={4}>col-6</Col>
        <Col span={4}>col-6</Col>
        <Col span={4}>col-6</Col>
        <Col span={4}>col-6</Col>
      </Row>
    </div>
  );
};

export default BusDetailHeader;
