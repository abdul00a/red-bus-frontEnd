import React, { Component } from 'react';
import Form from '../common/Form/Form';
import { cities } from '../../city.js';
import './Home.css'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='hero'>
                <Form cities={cities}/>
            </div>
         );
    }
}
 
export default Home;