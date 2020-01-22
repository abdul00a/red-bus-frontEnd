import React, { Component } from 'react';
import './paymentCard.css';
import { Row, Col, Icon, Tabs, Button } from 'antd';
import Card from '../card/card';

const { TabPane } = Tabs;

class PaymentCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="payment-options">
          <Row>
            <Col span={15} className="op">
              PAYMENT OPTIONS
            </Col>
            <Col span={5} className="ic">
              <Icon type="lock" className="pay-icon" />
              <div className="pp-txt">
                <div>Safe & secure</div>
                <div>Online Payments</div>
              </div>
            </Col>
            <Col span={4} className="ic bb">
              <Icon type="safety-certificate" className="pay-icon" />
              <div className="pp-txt">
                <span>10+ Years Trust</span>
              </div>
            </Col>
          </Row>
          <div className="pay-cardss">
            <Tabs tabPosition="left">
              <TabPane tab="Debit Card" key="1">
                <Card />
              </TabPane>
              <TabPane tab="Paytm" key="2">
                <span className="pytm-txt1">
                  Please note: You will be redirected to Paytm page on click of
                  Pay button
                </span>
                <div className="pytm-txt2">
                  <span>
                    Please note: Payment details will be collected at payment
                    gateway to complete the booking.
                  </span>
                </div>
              </TabPane>
            </Tabs>
          </div>
          <div className="py-btnn">
            <Button className="online-pay">PAY INR 111.34</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PaymentCard;
