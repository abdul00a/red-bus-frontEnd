import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './card.css';

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

  handleCVCInputChange = e => {
    let { name, value } = e.target;
    let val=''
    // eslint-disable-next-line no-unused-vars
    for(let i in value){
      val+='*';
    }
    this.setState({ [name]: val });
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
        <form className="crd-form">
          <input
            type="text"
            name="name"
            placeholder="Cardholder's Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="pay-box"
          />
          <input
            type="tel"
            name="number"
            placeholder="Debit Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="pay-box"
            pattern="\d*"
            maxlength="16"
          />
          <div className="expiry">
            <input
              type="tel"
              name="expiry"
              placeholder="Expiry Date"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              className="pay-box exp2"
              pattern="\d*"
              maxlength="4"
            />
            <input
              type="password"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleCVCInputChange}
              onFocus={this.handleInputFocus}
              className="pay-box exp1"
              pattern="\d*"
              maxlength="3"
            />
          </div>
        
        </form>
      </div>
    );
  }
}

export default PaymentCard;
