import React, { Component } from 'react';
import './paymentCard.css';
import { Row, Col, Icon, Tabs, Button } from 'antd';
import Card from '../card/card';
import { connect } from 'react-redux';
import { addBooking, setPaymentMethod } from '../../../actions/AddBooking/AddBooking';

const { TabPane } = Tabs;

class PaymentCard extends Component {

  addBooking=()=>{
    this.props.addBooking(this.props.bookingBody);
    if(Object.entries(this.props.bookingData).length!==0){
      console.log(this.props.bookingData)
      alert('Booking Done!!!')
      this.props.routeToBookings();
    }
    
  }

  setPaymentMethod=(paymentMethod)=>{
    console.log(paymentMethod)
    if(paymentMethod==="1")
    {
      paymentMethod="card";
    }
    else{
      if(paymentMethod==="2")
      {
        paymentMethod="paytm";
      }
    }
    this.props.setPaymentMethod(paymentMethod);
  }

  render() {
    console.log(this.props)
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
            <Tabs tabPosition="left" onTabClick={this.setPaymentMethod}>
              <TabPane tab="Debit Card" key="1">
                <Card />
              </TabPane>
            </Tabs>
          </div>
          <div className="pay-btnn">
            <Button className="online-pay" onClick={this.addBooking}>PAY INR {this.props.amount}</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    bookingBody:state.bookingData.bookingBody,
    bookingData:state.bookingData.bookingData,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addBooking:(bookingBody)=>dispatch(addBooking(bookingBody)),
    setPaymentMethod:(paymentMethod)=>dispatch(setPaymentMethod(paymentMethod)),
  }
}

PaymentCard=connect(mapStateToProps,mapDispatchToProps)(PaymentCard);

export default PaymentCard;






















// <TabPane tab="Paytm" key="2">
//                 <span className="pytm-txt1">
//                   Please note: You will be redirected to Paytm page on click of
//                   Pay button
//                 </span>
//                 <div className="pytm-txt2">
//                   <span>
//                     Please note: Payment details will be collected at payment
//                     gateway to complete the booking.
//                   </span>
//                 </div>
//               </TabPane>