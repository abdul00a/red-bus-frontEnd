import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import BusInfo from './components/busInfo/BusInfo';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={BusInfo} />
          {/* <Route path="/board/:id/:name" component={List} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
