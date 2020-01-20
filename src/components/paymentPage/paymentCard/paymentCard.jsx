import React, { Component } from 'react';
import './paymentCard.css';
import { Row, Col, Icon } from 'antd';

class PaymentCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="payment-options">
          <Row>
            <Col span={16} className="op">PAYMENT OPTIONS</Col>
            <Col span={4}  className="ic">
              <Icon type="lock" className="pay-icon" />
              <div className="pp-txt">
                <span>Safe & secure</span>
                <span>Online Payments</span>
              </div>
            </Col>
            <Col span={4}  className="ic bb">
              <Icon type="safety-certificate" className="pay-icon" />
              <div className="pp-txt">
                <span>10+ Years</span>
                <span>Trust</span>
              </div>
            </Col>
          </Row>
          <div>
            d
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PaymentCard;
