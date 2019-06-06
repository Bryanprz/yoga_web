import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
