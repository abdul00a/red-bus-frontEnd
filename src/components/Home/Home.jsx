import React, { Component } from 'react';
import TripQueryForm from '../common/Form/Form';
import { connect } from 'react-redux';
import './Home.css';
import { resetSearch } from '../../actions/Search/Search';

class Home extends Component {
  componentDidMount=()=>{
    this.props.resetSearch();
  }
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
    
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    resetSearch:()=> dispatch(resetSearch()),
  }
}

Home=connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;
