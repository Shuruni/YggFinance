import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
        <form className={classes.root} noValidate autoComplete="off">
            <div>
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
            </div>
        </form>
    );
}