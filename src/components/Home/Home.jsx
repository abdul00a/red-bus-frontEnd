import React, { Component } from 'react';
import TripQueryForm from '../common/Form/Form';
import './Home.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="hero">
        <TripQueryForm />
      </div>
    );
  }
}

export default Home;
