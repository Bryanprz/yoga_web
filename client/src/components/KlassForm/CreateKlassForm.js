import React from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

// Queries & Mutations
import fetchKlassesQuery from '../../queries/fetchKlasses';
import fetchTeachersStudents from '../../queries/fetchTeachersStudents';
import addKlassMutation from '../../mutations/createKlass';
import editKlassMutation from '../../mutations/editKlass';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
    paddingBottom: 20
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
    paddingBottom: 20,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  }
}));

// TODO make form mutate correctly based on action from prop
// TODO set options for all students/teachers from studio
const CreateKlassForm = ({action, selectedKlass, mutate}) => {
  const classes = useStyles();

  const [values, setValues] = React.useState(action === 'create' ? {
    name: '',
    description: '',
    startTime: '',
    endTime: '',
    teachers: [],
    students: []
  } : selectedKlass);

  const [successMessage, toggleSuccessMessage] = React.useState({
    showSuccessMessage: false
  });

  function renderTeacherMenuItem(teacher) {
    return <MenuItem name="teacher" value={teacher} key={teacher.id}>{ teacher.name }</MenuItem>
  }

  function renderStudentMenuItem(student) {
    return <MenuItem name="student" value={student} key={student.id}>{ student.name }</MenuItem>
  }

  function renderSuccessMessage() {
    return <h3 className="success-message">Your class was created successfully and added to the calendar!</h3>
  }

  function submitForm(e) {
    e.preventDefault();
    var { name, description, startTime, endTime, teachers, students } = values;
    var formatTeacherParams = teachers.map((t) => ({id: t.id, name: t.name}));
    var formatStudentParams = students.map((s) => ({id: s.id, name: s.name}));

    mutate({
      refetchQueries: [{ query: fetchKlassesQuery, variables: { id: 1 } }],
      variables: {
        klass: {
          name,
          description,
          startTime,
          endTime,
          studioId: '1'
        },
        teachers: formatTeacherParams,
        students: formatStudentParams 
      }
    }).then(() => {
        resetForm();
        toggleSuccessMessage({ showSuccessMessage: true });
    });
  }

  function resetForm() {
    setValues({
      name: '',
      description: '',
      startTime: '',
      endTime: '',
      teachers: [],
      students: []
    });
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  //const allStudioStudents = data.studio.students;
  //const allStudioTeachers = data.studio.teachers;
  const allStudioStudents = [];
  const allStudioTeachers = [];

  var formattedStartTime = '';
  var formattedEndTime = '';
  if (action === 'edit') {
    formattedStartTime = new Date(values.startTime).toISOString().split('Z')[0]
    formattedEndTime = new Date(values.endTime).toISOString().split('Z')[0]
  } 

  return (
    <form id="create-class-form" onSubmit={submitForm} className={classes.root}>
      { successMessage.showSuccessMessage ? renderSuccessMessage() : null }
      <TextField 
        name="name" 
        label="Name" 
        className={classes.textField} 
        value={values.name} 
        onChange={handleChange('name')}
      />

      <TextField 
        name="description" 
        label="Description" 
        className={classes.textField}
        value={values.description}
        onChange={handleChange('description')}
      />

      <FormControl className={classes.formControl}>
        <InputLabel>Students</InputLabel>
        <Select
          multiple
          value={values.students}
          onChange={handleChange('students')}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(student => (
                <Chip key={student.id} label={student.name} className={classes.chip} />
              ))}
            </div>
          )}>
          {allStudioStudents.map(student => renderStudentMenuItem(student))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Teacher(s)</InputLabel>
        <Select 
          multiple
          value={values.teachers} 
          onChange={handleChange('teachers')}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(teacher => (
                <Chip key={teacher.id} label={teacher.name} className={classes.chip} />
              ))}
            </div>
          )}>
            {allStudioTeachers.map(teacher => renderTeacherMenuItem(teacher))}
        </Select>
      </FormControl>

      <TextField 
        label="Start Time" 
        value={formattedStartTime}
        onChange={handleChange('startTime')}
        className={classes.textField} 
        type="datetime-local" 
        InputLabelProps={{ shrink: true }} 
      />

      <TextField 
        label="End Time" 
        value={formattedEndTime}
        onChange={handleChange('endTime')}
        className={classes.textField} 
        type="datetime-local" 
        InputLabelProps={{ shrink: true }} 
      />
      <Button variant="contained" className={classes.button} type="submit">
        Create New Class
      </Button>
    </form>
  );
}

const mapStateToProps = ({ selectedKlass }) => { return { selectedKlass } };
 
// TODO change hard-coded studio id in query to var
export default compose(
  connect(mapStateToProps),
  graphql(fetchTeachersStudents, { options: props => ({ variables: { id: 1 } }) }),
  graphql(addKlassMutation),
  graphql(editKlassMutation)
)(CreateKlassForm);
