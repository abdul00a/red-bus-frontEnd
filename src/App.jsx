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
import rootReducer from './reducer/rootReducer';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

function App() {
  return (
      <React.Fragment>
      <Provider store={store}>
    <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Trips} />
        </Switch>
      </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
