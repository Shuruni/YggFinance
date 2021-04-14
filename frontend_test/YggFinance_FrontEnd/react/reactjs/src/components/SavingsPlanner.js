import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SPTable from './SPTable'
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Initial Investment (USD)" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Average Rate of Return (%)" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Monthly Contributions (USD)" variant="outlined" />
          </Paper>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Years to Grow" variant="outlined" />
          </Paper>
          <Button variant="contained">
              Calculate
          </Button>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="top"
                control={<Switch color="primary" />}
                label="Time Frame | Savings Goal"
                labelPlacement="top"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <SPTable/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}