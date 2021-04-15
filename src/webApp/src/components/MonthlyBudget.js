import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MonthlyBudgetMenu from './MonthlyBudgetMenu';
import MBTable from './MBTable';


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
      <Grid container direction="row" spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Transactions:
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Merchant" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Spent (USD)" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Date (MM/DD/YYYY)" variant="outlined" />
          </Paper>
          <Button variant="contained">
              Reconcile
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            History:
          </Paper>
          <MBTable/>
        </Grid>
      </Grid>
    </div>
  );
}