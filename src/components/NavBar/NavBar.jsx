import React from 'react';
import { Menu, Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import './NavBar.css';
import { toggleDisplayLoginForm, logIn } from '../../actions/Login/Login';

class NavBar extends React.Component {
  state = {
    current: 'busTkt'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={20}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='logo' disabled>
                <div className='logo' />
              </Menu.Item>
              <Menu.Item key='busTkt'>BUS TICKETS</Menu.Item>
              <Menu.Item key='pool'>
                rPool<sup>NEW</sup>
              </Menu.Item>
              <Menu.Item key='hire'>BUS HIRE</Menu.Item>
              <Menu.Item key='pilgrim'>PILGRIMAGES</Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            {!this.props.loggedIn ? (
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode='horizontal'
              >
                <Menu.SubMenu
                  title={
                    <span className='submenu-title-wrapper'>
                      <div className='accounts-section'>
                        <Icon style={{ fontSize: '25px' }} type='user' />
                      </div>
                    </span>
                  }
                >
                  <Menu.ItemGroup>
                    <Menu.Item key='booking-history'>My Tickets</Menu.Item>
                    <Menu.Item key='logout'>LogOut</Menu.Item>
                  </Menu.ItemGroup>
                </Menu.SubMenu>
              </Menu>
            ) : (
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode='horizontal'
              >
                <Menu.SubMenu
                  title={
                    <span className='submenu-title-wrapper'>
                      <div className='accounts-section'>
                        <Icon style={{ fontSize: '25px' }} type='user' />
                        Accounts
                      </div>
                    </span>
                  }
                >
                  <Menu.ItemGroup>
                    <Menu.Item
                      key='login'
                      onClick={this.props.toggleDisplayLoginForm}
                    >
                      LogIn
                    </Menu.Item>
                  </Menu.ItemGroup>
                </Menu.SubMenu>
              </Menu>
            )}
          </Col>
        </Row>
        <Modal
          title='Login using Google'
          visible={this.props.display}
          onOk={this.handleOk}
          onCancel={this.props.toggleDisplayLoginForm}
          footer={null}
          width='700px'
        >
          <Row>
            <Col span={12}>
              <div className='desktop-payment-offers' />
            </Col>
            <Col span={12}>
              <div id='login-google'>
                <div id='login-with-google-line'>Sign-in with Google.</div>
                <div id='google-logo' onClick={this.props.logIn} />
              </div>
            </Col>
          </Row>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    display: state.Login.display,
    loggedIn: state.Login.loggedIn,
    userId: state.Login.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDisplayLoginForm: () => dispatch(toggleDisplayLoginForm()),
    logIn: () => dispatch(logIn())
  };
};

NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBar;
