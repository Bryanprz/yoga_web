import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class KlassListContainer extends Component {
  renderKlasses() {
    const { klasses } = this.props.data.studio;

    return klasses.map(({ name, description, teachers }) => {
      return (
        <li>
          {name} {description} taught by {teachers.map(t => t.name)}
        </li>
      )
    })
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div> }
    console.log(this.props);

    return (
      <div>
        KlassListContainer hi
        {this.renderKlasses()}
      </div>
    );
  }
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
