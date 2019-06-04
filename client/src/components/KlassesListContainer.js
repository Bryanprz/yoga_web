import React, { Component } from 'react';
import dataClient from '../utils/dataClient';

export default class KlassesListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      klasses: [],
      studio: null
    };
  }

  componentDidMount() {
    if (this.state.studio) {
      dataClient.studio.getStudio({ id: '1' })
        .then(resp => this.setState({ studio: resp.data }))
        .catch(err => console.error(err));

      dataClient.klass.getKlasses({ studioId: this.state.studio.id })
        .then(resp => this.setState({ klasses: [ ...this.state.klasses, resp.data ] }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
    <div>
      { this.state.klasses.map(k => { return k.name }) }
    </div>
    );
  }
}
