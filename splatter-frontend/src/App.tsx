import './App.css';
import '@fontsource/roboto'

import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import createAccount from './components/createAccount';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/createAccount" component={createAccount} />
      </Switch>
    </Router>
  );
}

export default App;
