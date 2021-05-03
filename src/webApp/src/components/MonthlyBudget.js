import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MonthlyBudgetMenu from './MonthlyBudgetMenu';
import MBTable from './MBTable';
import MBEditTrans from './MBEditTrans';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid>
        <Grid item Menu container justify="centered">
          <MonthlyBudgetMenu/>
          <Button variant="contained">
              New Month
          </Button>
          <Button variant="contained">
              Save Changes
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <Button variant="contained">
              Reconcile
          </Button>
          <MBEditTrans/>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            History:
          </Paper>
          <MBTable/>
        </Grid>
      </Grid>
    </div>
  );
}