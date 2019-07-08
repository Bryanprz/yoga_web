import React from 'react';
import { graphql, compose } from 'react-apollo';

// Queries & Mutations
import fetchTeachersQuery from '../../queries/fetchTeachers';
import fetchKlassesQuery from '../../queries/fetchKlasses';
import addKlassMutation from '../../mutations/createKlass';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
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
    width: 400,
    paddingBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

const KlassForm = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    description: '',
    startTime: '',
    endTime: '',
    teacher: { id: '', name: '' }
  });
  const [successMessage, toggleSuccessMessage] = React.useState({
    showSuccessMessage: false
  });

  if (props.data.loading) { return <h3>Loading...</h3> };

  function renderTeacherMenuItem(teacher) {
    return <MenuItem name="teacher" value={teacher} key={teacher.id}>{ teacher.name }</MenuItem>
  }

  function renderSuccessMessage() {
    return <h3 className="success-message">Your class was created successfully and added to the calendar!</h3>
  }

  function submitForm(e) {
    e.preventDefault();
    const { name, description, startTime, endTime, teacher } = values;

    props.mutate({
      refetchQueries: [{ query: fetchKlassesQuery, variables: { id: 1 } }],
      variables: {
        klass: {
          name,
          description,
          startTime,
          endTime,
          studioId: '1'
        },
        teacher: {
          name: teacher.name,
          id: teacher.id
        }
      }
    }).then(() => toggleSuccessMessage({ showSuccessMessage: true }));
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  var teachers = props.data.studio.teachers;

  return (
    <form onSubmit={submitForm} className={classes.formControl}>
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
        <InputLabel>Teacher(s)</InputLabel>
        <Select value={values.teacher} onChange={handleChange('teacher')}>
          {teachers.map(teacher => renderTeacherMenuItem(teacher))}
        </Select>
      </FormControl>

      <TextField 
        label="Start Time" 
        value={values.startTime} 
        onChange={handleChange('startTime')}
        className={classes.textField} 
        type="datetime-local" 
        InputLabelProps={{ shrink: true }} 
      />

      <TextField 
        label="End Time" 
        value={values.endTime} 
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
 
export default compose(
  graphql(fetchTeachersQuery, { options: props => ({variables: { id: 1 }}) }),
  graphql(addKlassMutation),
)(KlassForm);
