import '@fontsource/roboto'

import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import CreateAccount from './components/CreateAccount';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Token from './api/Token';

function App() {
  const [userToken, setUserToken] = useState(new Token());
  const [loginState, setLoginState] = useState(false);

  return (
    <Router>
      <NavBar isLoggedIn={loginState}/>
      <Switch>
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path="/login" component={() => <Login loginState={loginState} setLoginState={setLoginState} setTokenState={setUserToken}/>}/>
        <Route path="/createAccount" component={CreateAccount} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
