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

class assets extends Component {
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
                        label="Real Estate Value:"
                        id="outlined-full-width"
                        name="realEstateValue"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.realEstateValue}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Checking Account(s) Balance:"
                        id="outlined-full-width"
                        variant="outlined"
                        name='checkingAccountsBalance'
                        type='number'
                        defaultValue={this.props.checkingAccountsBalance}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Savings Account(s) Balance:"
                        id="outlined-full-width"
                        variant="outlined"
                        name='savingsAccountsBalance'
                        type='number'
                        defaultValue={this.props.savingsAccountsBalance}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Retirement Account(s) Balance:"
                        id="outlined-full-width"
                        variant="outlined"
                        name='retirementAccountsBalance'
                        type='number'
                        defaultValue={this.props.retirementAccountsBalance}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Automobile(s) Value:"
                        id="outlined-full-width"
                        variant="outlined"
                        name='automobilesValue'
                        type='number'
                        defaultValue={this.props.automobilesValue}
                        onChange={this.handleInputChange} />
                </Paper>
                <Paper className={classes.paper}>
                    <TextField
                        label="Other Asset(s) Value:"
                        id="outlined-full-width"
                        variant="outlined"
                        name='other'
                        type='number'
                        defaultValue={this.props.other}
                        onChange={this.handleInputChange} />
                </Paper>
            </div>
        )
    }
}

export default withStyles(useStyles)(assets); 