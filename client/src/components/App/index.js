import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import KlassDashboard from '../KlassDashboard';
import Dashboard from '../Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route
          path={'/classes'}
          render={props => <KlassDashboard {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
