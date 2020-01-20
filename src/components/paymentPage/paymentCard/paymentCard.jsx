import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './paymentCard.css';
import { Button } from 'antd';

class PaymentCard extends Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm" className="payment-layout">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <input
            type="text"
            name="name"
            placeholder="Card Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="pay-box"
          />
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="pay-box"
          />
          <div className="expiry">
            <input
              type="tel"
              name="expiry"
              placeholder="Expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              className="pay-box"
              pattern="\d*"
              maxlength="4"
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              className="pay-box"
              pattern="\d*"
              maxlength="3"
            />
          </div>
          <Button type="primary" className="pay-btn">
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

export default PaymentCard;
