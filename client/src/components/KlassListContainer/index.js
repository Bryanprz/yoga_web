import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class KlassListContainer extends Component {
  render() {
    const { name } = this.props.klass;

    return (
    <div>
      KlassListContainer hi {name}
    </div>
    );
  }
}

KlassListContainer.propTypes = {
  klass: PropTypes.object.isRequired
}
