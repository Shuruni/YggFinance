import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Automobile Value(s)" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Checking Account Balance(s)" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Savings Account Balance(s)" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Real Estate Value" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Retirement Funds" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Other Assets" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Total Assets" variant="outlined" InputProps={{ readOnly: true, }}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Auto Loans" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Consumer Debt" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Personal Loans" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Remaining Mortgage Balance" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Student Loans" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Other Liabilities" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Total Liabilities" variant="outlined" InputProps={{ readOnly: true, }}/>
          </Paper>
        </Grid>
        <Grid item xs={12} container direction="column" alignItems="center">
          <Button variant="contained">
              Calculate Net Worth
          </Button>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="NetWorth" variant="outlined" InputProps={{ readOnly: true, }}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}