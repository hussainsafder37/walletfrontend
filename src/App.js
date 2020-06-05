import React from 'react';

import './App.css';
import nav from './Components/Shared Components/nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomPage from './Components/WelcomPage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import dashboard from './Components/Dashboard/dashboard';
import createwallet from './Components/Dashboard/operations/createwallet';
import NotFound from './Components/Shared Components/NotFound';
import {Provider} from 'react-redux';
import store from './store';
import updatewallet from './Components/Dashboard/operations/updatewallet';

function App() {
  return (
    <Provider store={store}>
   <BrowserRouter>
   <Route path = "/" component ={nav} />
    <Switch>
    <Route path="/" exact component =  {WelcomPage} />
    <Route path="/Dashboard" exact component={dashboard} />
    <Route path="/createwallet" exact component={createwallet} />
    <Route path="/" component={NotFound} />
    <Route path="/updatewallet/:id" exact component = {updatewallet} />
    </Switch>
  
    </BrowserRouter>
    </Provider>
  );
}

export default App;
