import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'react-apollo';

// My Components
import EditKlassForm from '../KlassForm/EditKlassForm';

// Queries & Mutations
import fetchKlassQuery from '../../queries/fetchKlass';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

class KlassModal extends React.Component {
  state = {
    open: true,
    showForm: false
  };

  render() {
    if (this.props.data.loading) { return null };

    const klass = this.props.data.klass;

    let teachers = [];
    klass.teachers.forEach(teacher => teachers.push(teacher.name));
    const teachersEmpty = teachers.every(t => t === '');
    teachers = teachers.join(', ');

    let students = [];
    klass.students.forEach(student => students.push(student.name));
    const studentsEmpty = students.every(s => s === '');
    students = students.join(', ');

    return (
      <div>
        <Dialog
          onClose={this.props.onClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.open}
          fullWidth={true}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.props.onClose}>
            { klass.name }
          </DialogTitle>
          <DialogContent dividers>
            {this.state.showForm ? <EditKlassForm id={klass.id} /> : null}
            <Typography gutterBottom>
              { klass.description }
            </Typography>
            <Typography gutterBottom>
              Start Time: { klass.startTime }<br />
              End Time: { klass.endTime }
            </Typography>
            <Typography gutterBottom>
              Teachers: { teachersEmpty ? "No teacher registered" : teachers }
            </Typography>
            <Typography gutterBottom>
              Students Registered: { studentsEmpty ? "No students registered" : students }
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({showForm: true})} color="primary">
              Edit this class
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

KlassModal.propTypes = {
  klassId: PropTypes.string.isRequired
}

export default graphql(fetchKlassQuery, { options: props => ({variables: { id: props.klassId }}) })(KlassModal);
