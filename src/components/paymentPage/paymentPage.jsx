import React, { Component } from 'react';
import './paymentPage.css';
import PaymentCard from './paymentCard/paymentCard';
import { Icon } from 'antd';
import { withRouter } from 'react-router';
import BookingDetails from './BookingDetails/BookingDetails';

class PaymentPage extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="back-color">
        <div className="payment-head">
          <div className="pay-layout">
            <div className="box-1">
              <div className="payment-logo"></div>
              <div className="travel-route">
                <div className="travel-day">
                  <span>Delhi</span>
                  <Icon type="arrow-right" className="pay-arrow" />
                  <span>Chandigrah</span>
                </div>
                <span> 23-Jan-2020</span>
              </div>
            </div>
            <div className="pay-timer">
              <Icon type="clock-circle" className="clock" />
              <span className="contdown">
                10:00 <span style={{ fontSize: '15px' }}>minutes left</span>
              </span>
            </div>
          </div>
        </div>

        <div className="pay-section">
          <PaymentCard />
          <div className="bk-detail">
          <BookingDetails />
          </div>
        </div>
      </section>
    );
  }
}

export default PaymentPage;
