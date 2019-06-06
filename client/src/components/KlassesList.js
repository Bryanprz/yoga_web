import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class KlassesList extends Component {

  renderKlasses() {
    if (this.props.data.klasses) {
      return this.props.data.klasses.map(klass => {
        return <li>{klass.name}</li>;
      })
    };
  }

  render() {
    return (
      <div>
        <h3>Today's Classes</h3> 
        <ul>
          { this.renderKlasses() }
        </ul>
      </div>
    );
  }
}

const query = gql`
  {
    klasses(studioId: "1") {
      id
      name
      description
    }
  }
`;

export default graphql(query)(KlassesList);
