import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

// Queries
import fetchTeachersQuery from '../../queries/fetchTeachersStudents';

const TeacherDashboard = props => {
  console.log(props);
  return (
    <div>  
      Teacher D
    </div>  
  );
}

TeacherDashboard.propTypes = {
  studioId: PropTypes.string.isRequired
}

export default graphql(fetchTeachersQuery, { options: props => ({ variables: { id: props.studioId }}) })(TeacherDashboard);
