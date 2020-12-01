import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import { auth } from './components/Util/firebase';
import { useStateValue } from './components/Util/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HtQ3XJvZyfZIFkkw2CAtrD1eLOMh2MlvOFFK4YP0l8wkripKUvNi35tq6FfU6nFJ0oO8QDbXxPBhv94kL0G9TBq00loG124Id'
);



function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is => ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <NavBar />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <NavBar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <NavBar />
            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;