import React from 'react';
import { Menu, Icon } from 'antd';
import './NavBar.css';

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
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='horizontal'
        >
        <Menu.Item key='logo' disabled><div className='logo' /></Menu.Item>
          <Menu.Item key='busTkt'>BUS TICKETS</Menu.Item>
          <Menu.Item key='pool'>
            rPool<sup>NEW</sup>
          </Menu.Item>
          <Menu.Item key='hire'>BUS HIRE</Menu.Item>
          <Menu.Item key='pilgrim'>PILGRIMAGES</Menu.Item>
        </Menu>
    );
  }
}

export default NavBar;
