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
            <TextField id="outlined-full-width" label="Automobile Value(s)" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Checking Account Balance(s)" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Savings Account Balance(s)" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Real Estate Value" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Retirement Funds" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Other Assets" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Total Assets" InputLabelProps={{ shrink: true, }} variant="outlined" InputProps={{ readOnly: true, }}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Auto Loans" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Consumer Debt" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Personal Loans" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Remaining Mortgage Balance" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Student Loans" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Other Liabilities" InputLabelProps={{ shrink: true, }} variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-full-width" label="Total Liabilities" variant="outlined" InputProps={{ readOnly: true, }} InputLabelProps={{ shrink: true, }}/>
          </Paper>
        </Grid>
        <Grid item xs={12} container direction="column" alignItems="center">
          <Button variant="contained">
              Calculate Net Worth
          </Button>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="NetWorth" variant="outlined" InputLabelProps={{ shrink: true, }} InputProps={{ readOnly: true, }}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}