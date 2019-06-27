import React from 'react';
import { connect } from 'react-redux';

import './right-panel.scss';

const RightPanel = ({ selectedKlass }) => {
  function renderStudents() {
    return selectedKlass.klassRoster.map(({student, checkedIn}) => {
      return (
        <li key={student.name}>{ student.name } has { checkedIn ? "Checked In" : "Not Checked In" }</li>
      )
    });
  }

  if (!selectedKlass) { return null };
  
  return (
    <div className="right-panel">
      <h3 className="header">Students Checking Into <br /><span className="klass-title">{ selectedKlass.name }</span></h3>
      <div className="student-list-container">
        <ul>
          { renderStudents() }
        </ul>
      </div>
    </div>  
  );
}

const mapStateToProps = ({ selectedKlass }) => { return { selectedKlass } };

export default connect(mapStateToProps)(RightPanel);
