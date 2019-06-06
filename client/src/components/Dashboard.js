import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // binds apollo data source (graphql) w component
import gql from 'graphql-tag';

import Sidebar from './Sidebar';
import KlassesList from './KlassesList';

class Dashboard extends Component {
  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }

    return (
      <div>
        <h1>{ this.props.data.studio.name }</h1>
        <KlassesList />
      </div>
    );
  }
}

// defines but does not execute query
const query = gql`
 {
   studio(id: "1") {
     id
     name
     description
   }
 }
`;

export default graphql(query)(Dashboard);
