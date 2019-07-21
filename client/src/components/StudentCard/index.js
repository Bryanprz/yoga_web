import React from 'react';
import { graphql, compose } from 'react-apollo';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

// Queries & Mutations
import checkInStudent from '../../mutations/checkInStudent';
import fetchKlassRoster from '../../queries/fetchKlassRoster';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 15
  },
  checkedInBg: {
    backgroundColor: '#C9FB6B',
  },
  notCheckedInBg: {
    backgroundColor: '#FFD0D0',
  }
});

const StudentCard = ({student, klassId, mutate, data}) => {
  const classes = useStyles();
  var cardBgColor = classes.notCheckedInBg;
  
  if (!data.loading) { 
    const activeStudent = data.klassRoster.filter(roster => roster.student.id === student.id).first;
    console.log('activeStudent: ', activeStudent);
    //var checkedIn = data.klassRoster.first.checkedIn;
    //cardBgColor = checkedIn ? classes.checkedInBg : classes.notCheckedInBg;
  }
  const checkedIn = true;

  // popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function checkStudentIn(e) {
    mutate({
      refetchQueries: [{ query: fetchKlassRoster, variables: { klassId, student_id: student.id }}],
      variables: { studentId: student.id, klassId }
    }).then(() => console.log('done'));
  }

  return (
    <Card className={[classes.card, cardBgColor].join(' ')}>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Button variant="contained" color="primary" onClick={checkStudentIn}>Yes</Button>
        <Button variant="contained" color="secondary">No</Button>
      </Popover>

      <CardContent>
        <Typography variant="h5" component="h2">
          {student.name}
        </Typography>
        <Typography variant="body2" component="p">
          {checkedIn ? 'Checked In' : 'Not Checked In'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Check {student.name} in?</Button>
      </CardActions>
    </Card>
  );
} 

export default compose(
  graphql(checkInStudent),
  graphql(fetchKlassRoster, { options: props => ({
      variables: { klassId: props.klassId, studentId: props.student.id }
    }) 
  })
)(StudentCard);
