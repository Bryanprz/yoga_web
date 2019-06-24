import React from 'react';
import { connect } from 'react-redux';

import './right-panel.scss';

const RightPanel = ({ selectedKlass }) => {
  function renderStudents() {
    return selectedKlass.students.map(student => {
      return <li>{ student.name }</li>
    });
  }

  console.log(selectedKlass); 

  if (!selectedKlass) { return null };
  
  return (
    <div className="right-panel">
      <h3>Students Checking Into { selectedKlass.name }</h3>
      { renderStudents() }
    </div>  
  );
}

const mapStateToProps = ({ selectedKlass }) => { return { selectedKlass } };

export default connect(mapStateToProps)(RightPanel);
