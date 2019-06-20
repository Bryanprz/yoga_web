import React, { Component } from 'react';
import KlassesList from '../KlassesList';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <KlassesList />
      </div>
    );
  }
}
