import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import Login from './components/Login/index';
import Report from './components/Report/index';
import Update from './components/Update/index';
import PageNotFound from './components/PageNotFound';
export const history=createHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>           
        <Route exact path="/" component={Report} />
        <Route exact path="/login" component={Login} />        
        <Route exact path="/input" component={Update} />    
        <Route component={PageNotFound} />    
      </Switch>
    </Router>
  );
}

export default App;