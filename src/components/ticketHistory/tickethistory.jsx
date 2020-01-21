import React, { Component } from 'react';
import { Row, Col } from 'antd';

class TicketHistory extends Component {
  render() {
    return (
      <div>
        <div className="t-history">
          <Row>
            <Col span={12}>Ticket ID: 12</Col>
            <Col span={12}>
              <div>
                <span>Email: abc@gmail.com</span>
              </div>
              <div>
                <span>Phone No.: 896523457</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div>
                <span>Passengers:</span>
              </div>
              <div>
                <span>Name: Abdul</span>
              </div>
              <div>
                <span>Gender: Male</span>
              </div>
              <div>
                <span>Age: 22</span>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <span>Bus No.: BKID2</span>
              </div>
              <div>
                <span>Seat Name: ascv</span>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <span>Departure Date</span>
              </div>
              <div>
                <span>15-12-2020</span>
              </div>
              <div>
                <span>Arival Date</span>
              </div>
              <div>
                <span>15-12-2020</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TicketHistory;
