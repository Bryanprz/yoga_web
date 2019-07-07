import React, { useState } from 'react';
import './klass-dashboard.scss';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { graphql } from 'react-apollo';

// Queries & Mutations
import fetchKlassesQuery from '../../queries/fetchKlasses';

// My Components
import Sidebar from '../Sidebar';
import NewKlassForm from './NewKlassForm';
import KlassModal from '../KlassModal';

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
  const [showKlassModal, toggleModal] = useState(false);
  const [selectedKlass, selectKlass] = useState({});
  const classes = useStyles();

  if (props.data.loading) { return <h3>Loading...</h3> };

  var klassEvents = [];

  props.data.studio.klasses.map(klass => createCalendarEvent(klass));

  // required format for FullCalendar. https://fullcalendar.io/docs/event-parsing
  function createCalendarEvent(klass) {
    let event = {
      id: klass.id,
      title: klass.name,
      description: klass.description,
      start: new Date(klass.startTime),
      end: new Date(klass.endTime),
      teachers: klass.teachers.map(t => t.name),
      students: klass.students.map(s => s.name)
    }
    klassEvents.push(event);
  }

  function klassClick({event}) {
    const selectedKlass = klassEvents.find( el => el.id === event.id);
    selectKlass({ selectedKlass });
    toggleModal(true);
  }

  function closeModal() {
    toggleModal(false);
  }

  return (
    <Grid container className="klass-dashboard-container">
      <Grid container item sm={3}>
        <Sidebar />
      </Grid>

      <Grid item sm={9} className="klass-dashboard-content-container">
        <h3>Classes at WildFlowers Yoga Studio</h3>
        <p>Click on any class in the calendar to see details</p> 

        <Button 
          variant="contained" 
          className={classes.button} 
          color="primary" 
          onClick={() => toggleForm(!showForm)}
        >
          Add New Class
        </Button>

        {showForm ? <NewKlassForm /> : null}
        {showKlassModal ? 
          <KlassModal 
            klass={selectedKlass} 
            onClose={closeModal} 
            open={showKlassModal}
          /> : null}

        <FullCalendar 
          plugins={[ dayGridPlugin ]} 
          events={klassEvents} 
          eventClick={klassClick}
        />
      </Grid>
    </Grid>
  );
}

export default graphql(fetchKlassesQuery, { options: props => ({variables: { id: 1 }}) })(KlassDashboard);
