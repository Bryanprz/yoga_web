import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

// Components
import KlassCard from '../KlassCard';

// Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Styles Overrides
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column',
    alignContent: 'center'
  }
}));

const KlassListContainer = props => {
  const classes = useStyles();

  if (props.data.loading) { return <div>Loading...</div> };

  const { klasses } = props.data.studio;

  return (
    <div>
      <Grid container className={classes.root} spacing={7} justify="center" >
        <h2>Today's Classes</h2>
        {klasses.map(({ name, description, teachers }) => (
          <Grid item key={name + teachers}>
            <KlassCard 
              title={ name } 
              content={ description } 
              subheader={ teachers.map(t => t.name) } />
          </Grid>
          )
        )}
      </Grid>
    </div>
  );
}

const query = gql`
query($id: ID!) {
  studio(id: $id) {
    klasses {
      name
      description
      teachers {
        name
      }
    }
  }
}
`;

// TODO get ID from props
export default graphql(query, {
  options: props => ({ variables: { id: 1 }})
})(KlassListContainer);

// TODO add proptypes expect studio id required
