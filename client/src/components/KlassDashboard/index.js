import React, { useState } from 'react';
import './klass-dashboard.scss';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// Components
import Sidebar from '../Sidebar';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
    paddingBottom: 20
  },
  formControl: {
    margin: theme.spacing(1),
    width: 400,
    paddingBottom: 20
  }
}));

const KlassDashboard = props => {
  const [showForm, toggleForm] = useState(false);

  const classes = useStyles();
  var klassEvents = [];

  if (!props.data.loading) {
    var teachers = props.data.studio.teachers;
    props.data.studio.klasses.map(klass => createCalendarEvent(klass));
  }

  // required format for FullCalendar. https://fullcalendar.io/docs/event-parsing
  function createCalendarEvent(klass) {
    let event = {
      title: klass.name,
      start: new Date(klass.startTime),
      end: new Date(klass.endTime)
    }
    klassEvents.push(event);
  }

  function renderNewKlassForm() {
    if (showForm) {
      return (
        <form className="form-container">
          <TextField label="Name" className={classes.textField}/>

          <TextField label="Description" className={classes.textField}/>

          <FormControl className={classes.formControl}>
            <InputLabel>Teacher(s)</InputLabel>
            <Select value={teachers} onChange={handleTeacherChange}>
              <MenuItem value={'brandi'}>Brandi</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Start Time" className={classes.textField} type="datetime-local" InputLabelProps={{ shrink: true }} />

          <TextField label="End Time" className={classes.textField} type="datetime-local" InputLabelProps={{ shrink: true }} />
        </form>
      )
    }
  }

  function handleTeacherChange(event) {
    //addTeachers(currentTeachers => ({...currentTeachers, []}));
  }

  return (
    <Grid container className="klass-dashboard-container">
      <Grid container item sm={3}>
        <Sidebar />
      </Grid>

      <Grid item sm={9}>
        <h3>Classes at WildFlowers Yoga Studio</h3>
        <Button variant="contained" className={classes.button} color="primary" onClick={() => toggleForm(!showForm)}>
          Add New Class
        </Button>
        { renderNewKlassForm() }
        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} events={klassEvents} />
      </Grid>
    </Grid>
  );
}

const query = gql`
  query($id: ID!) {
    studio(id: $id) {
      teachers {
        name
      }
      klasses {
        name
        startTime
        endTime
      }
    }
  }
`;

export default graphql(query, {
  options: props => ({variables: { id: 1 }})
})(KlassDashboard);
