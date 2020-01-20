import React, { Component } from 'react';
import TripQueryForm from '../common/Form/Form';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='hero'>
        <TripQueryForm />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    busPropStyle:state.animation.busPropAnimate,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{}
}

Home=connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;
