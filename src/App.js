import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import Products from './page/Products';
function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>     
    </Router>
  );
}

export default App;
