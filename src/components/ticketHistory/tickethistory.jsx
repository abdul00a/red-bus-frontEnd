import React, { Component } from 'react';
import { Tabs } from 'antd';
import './tickethistory.css';
import Ticket from '../common/ticket/ticket';
import { connect } from 'react-redux';
import { ticketAction } from '../../actions/ticket/ticket';
import {
  cancelTicket,
  emptyMessage
} from '../../actions/cancelTicket/cancelticket';

const { TabPane } = Tabs;

const mapStateToProps = state => {
  return {
    tickets: state.userTicket.tickets,
    message: state.cancled.message
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestTickets: userId => dispatch(ticketAction(userId)),
    CancelTicket: obj => dispatch(cancelTicket(obj)),
    EmptyMessage: () => dispatch(emptyMessage())
  };
};

class TicketHistory extends Component {
  componentDidMount() {
    this.props.RequestTickets('106669990584810577450');
  }

  componentDidUpdate(prevProps) {
    if (this.props.message === 'Ticket cancelled') {
      this.props.RequestTickets('106669990584810577450');
      alert(this.props.message);
      this.props.EmptyMessage();
    }
  }

  handleCancel = ticket => {
    this.props.CancelTicket({
      ticketId: ticket.id,
      userEmail: ticket.emailOnTicket
    });
  };

  render() {
    console.log(this.props.message);
    return (
      <React.Fragment>
        <div className="book-header">
          <div>Booking History</div>
          <div className="t-history">
            <React.Fragment>
              <Tabs defaultActiveKey="1" tabPosition="left">
                <TabPane tab="Active Booking" key="1">
                  {this.props.tickets.filter(ele => ele.status === 'active')
                    .length !== 0 ? (
                    this.props.tickets
                      .filter(ele => ele.status === 'active')
                      .map(ticket => {
                        const dayObj = new Date(ticket.dateOfJourney);
                        const day = dayObj.toLocaleString('en', {
                          day: 'numeric'
                        });
                        const month = dayObj.toLocaleString('en', {
                          month: 'short'
                        });
                        const year = dayObj.toLocaleString('en', {
                          year: 'numeric'
                        });
                        return (
                          <Ticket
                            key={ticket.id}
                            day={day}
                            month={month}
                            year={year}
                            ticket={ticket}
                            cancel={this.handleCancel}
                          />
                        );
                      })
                  ) : (
                    <div className="emptyy"> Empty List </div>
                  )}
                </TabPane>
                <TabPane tab="Cancelled" key="2">
                  {this.props.tickets.filter(ele => ele.status !== 'active')
                    .length !== 0 ? (
                    this.props.tickets
                      .filter(ele => ele.status !== 'active')
                      .map(ticket => {
                        const dayObj = new Date(ticket.dateOfJourney);
                        const day = dayObj.toLocaleString('en', {
                          day: 'numeric'
                        });
                        const month = dayObj.toLocaleString('en', {
                          month: 'short'
                        });
                        const year = dayObj.toLocaleString('en', {
                          year: 'numeric'
                        });
                        return (
                          <Ticket
                            key={ticket.id}
                            day={day}
                            month={month}
                            year={year}
                            ticket={ticket}
                            cancel={this.handleCancel}
                          />
                        );
                      })
                  ) : (
                    <div className="emptyy"> Empty List </div>
                  )}
                </TabPane>
              </Tabs>
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketHistory);
