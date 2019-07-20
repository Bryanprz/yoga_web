import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Sidebar from '../Sidebar';
import KlassListContainer from '../KlassListContainer';
import Reception from '../Reception';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 40
  }
}));

const Dashboard = props => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container item sm={3}>
        <Sidebar />
      </Grid>

      <Grid container item sm={6}>
        <KlassListContainer />
      </Grid>

      <Grid container item sm={3}>
        <Reception />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
