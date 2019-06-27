import React from 'react';
import './klass-dashboard.scss';

// Components
import Sidebar from '../Sidebar';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const KlassDashboard = props => {
  const classes = useStyles();

  return (
    <Grid container justify="flex-start" alignItems="center" direction="column" className="klass-dashboard-container">
      <Grid container item sm={3}>
        <Sidebar />
      </Grid>

      <Grid item sm={9}>
        <h3>All Classes offered at WildFlowers Yoga Studio</h3>
        <Button variant="contained" className={classes.button} color="primary" >Add New Class</Button>
      </Grid>
    </Grid>  
  );
}

export default KlassDashboard;
