import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'antd/dist/antd.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Trips from './components/Trips/Trips';
import './App.css';
import rootReducer from './reducer/rootReducer';
import PaymentPage from './components/paymentPage/paymentPage';
import BookingHistory from './components/ticketHistory/tickethistory';

import Footer from './components/footer/footer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Trips} />
              <Route path="/payment" component={PaymentPage} />
              <Route path="/bookinghistory" component={BookingHistory} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
