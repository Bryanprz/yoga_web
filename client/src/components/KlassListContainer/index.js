import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import KlassCard from '../KlassCard';

class KlassListContainer extends Component {
  renderKlasses() {
    const { klasses } = this.props.data.studio;

    return klasses.map(({ name, description, teachers }) => {
      return (
        <KlassCard 
          title={ name } 
          content={ description } 
          subheader={ teachers.map(t => t.name) } />
      )
    })
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div> }
    console.log(this.props);

    return (
      <div>
        <h2>Today's Classes</h2>
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
