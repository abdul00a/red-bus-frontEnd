import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

class Ticket extends Component {
  state = {
    myclass: ''
  };

  handledisplay = () => {
    if (this.state.myclass === '') {
      this.setState({ myclass: 'coolclass' });
    } else {
      this.setState({ myclass: '' });
    }
  };

  render() {
    return (
      <div className="tic-container">
        <div onClick={this.handledisplay}>
          <Row>
            <Col span={4}>
              <div className="d">{this.props.day}</div>
              <div className="m-y common">
                {this.props.month} {this.props.year}
              </div>
              <div className="week">{this.props.ticket.dayOfJourney}</div>
            </Col>
            <Col span={8}>
              <div className="bn bbn">{this.props.ticket.busName}</div>
            </Col>
            <Col span={6}>
              <div className="br bbn">Boarding</div>
              <div className="common1">{this.props.ticket.boardingPoint}</div>
            </Col>
            <Col span={6} className="lst'">
              <div className="br bbn">
                {this.props.ticket.status === 'active' ? 'Booked' : 'Cancelled'}
              </div>
              <div className="common1">Trip ID</div>
              <div className="common1 tick-id">{this.props.ticket.id}</div>
            </Col>
          </Row>
        </div>
        <div
          id="bkdetil"
          className={this.state.myclass}
          style={{ display: 'none' }}
        >
          <Row>
            <Col span={10}>
              <div className="bn1 mr-t">{this.props.ticket.busName}</div>
            </Col>
            <Col span={8} className="t-cnn">
              <span className="common1">Travels</span>
            </Col>
            <Col span={6} className="lst">
              <div className="bn1 mr-t">{this.props.ticket.boardingTime}</div>
              <div className="common1">Departure Time</div>
            </Col>
          </Row>
          <Row className="brd">
            <Col span={10}>
              <div className="bn1 mr-t">
                {this.props.ticket.nameOnTicket}
                {',  '}
                <span>{this.props.ticket.ageOnTicket}</span>
              </div>
            </Col>
            <Col span={8} className="t-cn">
              <div className="common1">Passengers</div>
              <div className="st cn">Seats</div>
              <div className="common cn">{this.props.ticket.seatNumber}</div>
            </Col>
            <Col span={6} className="lst">
              <div className="common1 mr-t">ADD ONS</div>
            </Col>
          </Row>
          <Row className="brd">
            <Col span={10}>
              <div className="common1 mr-t">Ticket Status</div>
              <div
                className="bn1"
                style={
                  this.props.ticket.status !== 'active'
                    ? { color: 'red' }
                    : { color: 'green' }
                }
              >
                {this.props.ticket.status}
              </div>
            </Col>
            <Col span={8}>
              <span className="common1 pd">PAYMENT DETAILS</span>
            </Col>
            <Col span={6} className="lst">
              <div className="common1 mr-t">Total Amount</div>
              <div className="bn1">INR {this.props.ticket.fare}.00</div>
            </Col>
          </Row>
          <div
            style={
              this.props.ticket.status !== 'active' ? { display: 'none' } : {}
            }
          >
            <Button
              onClick={() => this.props.cancel(this.props.ticket)}
              className="can-ticket"
            >
              Cancel Ticket
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
export default Ticket;
