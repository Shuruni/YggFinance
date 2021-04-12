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

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item Menu>
            <MonthlyBudgetMenu/>
            <Button variant="contained">
              New Month
          </Button>
          <Button variant="contained">
              Save Changes
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item Inputs>
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
        </Grid>
        <Grid item Outputs>
          <Paper className={classes.paper}>
            History:
          </Paper>
          <MBTable/>
        </Grid>
      </Grid>
    </div>
  );
}