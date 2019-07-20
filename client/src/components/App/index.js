import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import KlassDashboard from '../KlassDashboard';
import TeacherDashboard from '../TeacherDashboard';
import Dashboard from '../Dashboard';
import LoginPage from '../LoginPage';
import BryanComponent from '../BryanComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/bryan' component={BryanComponent}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route
          path={'/classes'}
          render={props => <KlassDashboard {...props} />}
        />
        <Route
          path={'/teachers'}
          render={props => <TeacherDashboard {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
