import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import KlassListContainer from '../KlassListContainer';
import Dashboard from '../Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route
          path={'/classes'}
          render={props => <KlassListContainer {...props} klass={{name: 'wildflowers'}} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
