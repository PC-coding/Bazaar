import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>

          <Route path='/checkout'>
            <Checkout />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;