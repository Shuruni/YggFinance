import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

class liabilities extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        this.props.onInputChange(event);
    }
    
    render () {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <TextField
                        label="Auto Loans:"
                        id="outlined-full-width"
                        name="autoLoans"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.autoLoans}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Consumer Debt:"
                        id="outlined-full-width"
                        name="consumerDebt"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.consumerDebt}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Personal Loans:"
                        id="outlined-full-width"
                        name="personalLoans"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.personalLoans}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Remaining Mortgage Balance:"
                        id="outlined-full-width"
                        name="remainingMortgageBalance"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.remainingMortgageBalance}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Student Loans:"
                        id="outlined-full-width"
                        name="studentLoans"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.studentLoans}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Other Liabilities:"
                        id="outlined-full-width"
                        name="other"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.other}
                        onChange={this.handleInputChange} />
                </Paper>
            </div>
        )
    }
}

export default withStyles(useStyles)(liabilities);