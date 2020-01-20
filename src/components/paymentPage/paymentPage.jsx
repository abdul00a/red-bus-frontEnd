import React, { Component } from 'react';
import './paymentPage.css';
import PaymentCard from './paymentCard/paymentCard';
import { Button } from 'antd';

class PaymentPage extends Component {
  render() {
    return (
      <section>
        <div className="payment-logo"></div>
        <div className="pay-options">
          <div className="select-payment-method">
            <div className="select-pay">
              <div className="pay-text">PAYMENT OPTIONS</div>
              <div>
                <div>
                  <Button className="op-payment deb">Debait Card >></Button>
                </div>
                <div>
                  <Button className="op-payment">Paytm</Button>
                </div>
              </div>
            </div>
          </div>
          <PaymentCard />
        </div>
      </section>
    );
  }
}

export default PaymentPage;
