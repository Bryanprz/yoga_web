import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

// Actions
import { authorizeUser } from '../../actions';

// Queries and Mutations
import loginMutation from '../../mutations/login';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const LoginPage = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const attemptLogin = () => {
    props.mutate({
      variables: {
        email: values.email,
        password: values.password
      }
    }).then(resp => {
      if (resp.data.login) {
        console.log(resp);
        console.log('success');
        props.authorizeUser({ email: values.email });
      } else {
        console.log(resp);
        console.log('failure');
      }
    })
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      Please enter your credentials
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        value={values.password}
        type="password"
        onChange={handleChange('password')}
        autoComplete="current-password"
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        className={classes.button} 
        onClick={attemptLogin}
      >
        Login
      </Button>
    </form>
  );
}

export default connect(null, { authorizeUser })(graphql(loginMutation)(LoginPage));
