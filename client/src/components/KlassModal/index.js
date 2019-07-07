import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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
  };

  render() {
    const klass = this.props.klass.selectedKlass;

    const teachers = klass.teachers.join(", ");
    const teachersEmpty = klass.teachers.every(t => t === '');

    const students = klass.students.join(", ");
    const studentsEmpty = klass.students.every(s => s === '');
    
    return (
      <div>
        <Dialog
          onClose={this.props.onClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.open}
          fullWidth={true}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.props.onClose}>
            { klass.title }
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              { klass.description }
            </Typography>
            <Typography gutterBottom>
              Teachers: { teachersEmpty ? "No teacher registered" : teachers }
            </Typography>
            <Typography gutterBottom>
              Students Registered: { studentsEmpty ? "No students registered" : students }
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default KlassModal;
