import React, { Component } from 'react';
import TripQueryForm from '../common/Form/Form';
import './Home.css';
// import PaymentPage from '../paymentPage/paymentPage';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="hero">
        <TripQueryForm />
        {/* <PaymentPage /> */}
      </div>
    );
  }
}

export default Home;
