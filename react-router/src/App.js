import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home'
import We from './components/We'
import Contact from './components/Contact'
import User from './components/User'

const App = () => {
  return (
    <Router>
      <div className="container mt-2">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark" activeClassName="active">Home</NavLink>
          <Link to="/we" className="btn btn-dark">We</Link>
          <Link to="contact" className="btn btn-dark">Contact</Link>
        </div>
        <hr />
        <Switch>
          <Route path="/we/:id">
            <User />
          </Route>
          <Route path="/we">
            <We />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" exact>
            <Home />  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
