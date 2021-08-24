import '@fontsource/roboto'

import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import createAccount from './components/createAccount';
import SideDrawer from './components/SideDrawer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/createAccount" component={createAccount} />
      </Switch>
    </Router>
  );
}

export default App;
