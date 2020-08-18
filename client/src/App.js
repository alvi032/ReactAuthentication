import React from 'react';
import './App.css';
import Home from './Scenes/Homepage/index'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import signIn from './Scenes/Sign In/index'
import register from './Scenes/Register/index'
import signOut from './Scenes/Sign Out/index'

function App() {
  return (
    <div className="App">
        <a href={'/'}>Home</a>
      <Router>
          <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/signin'} exact component={signIn} />
              <Route path={'/register'} exact component={register} />
              <Route path={'/signout'} exact component={signOut} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
