import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import 'antd/dist/antd.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Trips from './components/Trips/Trips';
import './App.css';

function App() {
  return (
      <React.Fragment>
    <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Trips} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
