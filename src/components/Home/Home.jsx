import React, { Component } from 'react';
import TripQueryForm from '../common/Form/Form';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='sun-prop' />
        <div className="search-signboard">
        <TripQueryForm />
        </div>
        <div className='road'>
          <hr className='divider' />
        </div>
        <div className='bus-prop' style={(this.props.busPropStyle)} />
        {/* <PaymentPage /> */}
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
