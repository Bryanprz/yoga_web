import React, { useState } from 'react';
import './klass-dashboard.scss';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { graphql } from 'react-apollo';

// Queries & Mutations
import fetchKlassesQuery from '../../queries/fetchKlasses';

// Components
import Sidebar from '../Sidebar';
import NewKlassForm from './NewKlassForm';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
}));

const KlassDashboard = props => {
  const [showForm, toggleForm] = useState(false);
  const classes = useStyles();

  if (props.data.loading) { return <h3>Loading...</h3> };

  var klassEvents = [];

  props.data.studio.klasses.map(klass => createCalendarEvent(klass));

  // required format for FullCalendar. https://fullcalendar.io/docs/event-parsing
  function createCalendarEvent(klass) {
    let event = {
      title: klass.name,
      start: new Date(klass.startTime),
      end: new Date(klass.endTime)
    }
    klassEvents.push(event);
  }

  return (
    <Grid container className="klass-dashboard-container">
      <Grid container item sm={3}>
        <Sidebar />
      </Grid>

      <Grid item sm={9} className="klass-dashboard-content-container">
        <h3>Classes at WildFlowers Yoga Studio</h3>

        <Button 
          variant="contained" 
          className={classes.button} 
          color="primary" 
          onClick={() => toggleForm(!showForm)}
        >
          Add New Class
        </Button>

        {showForm ? <NewKlassForm /> : null}

        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} events={klassEvents} />
      </Grid>
    </Grid>
  );
}

export default graphql(fetchKlassesQuery, { options: props => ({variables: { id: 1 }}) })(KlassDashboard);
