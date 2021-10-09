import './App.css';
import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Dashboard from '../Dashboard/Dashboard'; 
import Preferences from '../Preferences/Preferences'; 
import Login from '../Login/Login'; 

function App() {
  const { token, setToken } = React.useState(); 
  if (!token) {
    return <Login setToken={setToken}></Login>
  }
  return (
    <div className="wrapper">
      <h1>My App</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/preferences">
          <Preferences/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
