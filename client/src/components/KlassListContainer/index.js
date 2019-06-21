import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class KlassListContainer extends Component {
  renderKlasses() {
    return this.props.data.studio.klasses.map( klass => {
      return (
        <li>{klass.name}</li>
      )
    })
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div> }
    console.log(this.props);

    return (
      <div>
        KlassListContainer hi
      </div>
    );
  }
}

const query = gql`
query($id: ID!) {
  studio(id: $id) {
    klasses {
      id
      name
    }
  }
}
`;

export default graphql(query, {
  options: props => ({ variables: { id: 1 }})
})(KlassListContainer);
