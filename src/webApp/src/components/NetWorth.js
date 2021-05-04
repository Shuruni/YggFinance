import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NWAssets from './NWAssets';
import NWLiab from './NWLiab';

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
            <NWAssets/>
          </Grid>
          <Grid item xs={6}>
            <NWLiab/>
          </Grid>  
            <Button variant="contained">
                Calculate Net Worth
            </Button>
          </Grid>
      </div>
  );
}