import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class KlassCard extends Component {

  render() {
    return (
    <div>
      KlassCard
    </div>
    );
  }
};

KlassCard.propTypes = {
  klass: PropTypes.object.isRequired
};
