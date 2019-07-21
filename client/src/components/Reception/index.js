import React from 'react';
import { connect } from 'react-redux';
import StudentCard from '../StudentCard';
import Grid from '@material-ui/core/Grid';

import './reception.scss';

const Reception = ({ selectedKlass }) => {
  function renderStudents() {
    return selectedKlass.klassRoster.map(({student}) => {
      return (
        <Grid item xs key={student.name}>
          <StudentCard student={student} klassId={selectedKlass.id} />
        </Grid>
      )
    });
  }

  if (!selectedKlass) { return null };
  
  return (
    <Grid item container spacing={3}>
      <div className="reception">
        <h3 className="header">Students Checking Into <br /><span className="klass-title">{ selectedKlass.name }</span></h3>
        <div className="student-list-container">
          <ul>
            { renderStudents() }
          </ul>
        </div>
      </div>  
  </Grid>
  );
}

const mapStateToProps = ({ selectedKlass }) => { return { selectedKlass } };

export default connect(mapStateToProps)(Reception);
