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
        this.state = {
            realEstateValue: 0,
            checkingAccountsBalance: 0,
            savingsAccountsBalance: 0,
            retirementAccountsBalance: 0,
            automobilesValue: 0,
            other: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


       handleInputChange = (event) => {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
       }
       state = {
        searchNodes: ""
        };
       
       render () {
           const { classes } = this.props;
            return (
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <Paper className={classes.paper}>
                            <TextField
                                label="Real Estate Value:"
                                id="outlined-full-width"
                                name="realEstateValue"
                                type="number"
                                variant="outlined"
                                value={this.state.realEstateValue}
                                onChange={this.handleInputChange} />
                        </Paper>
                        <Paper className={classes.paper}>
                            <TextField
                                label="Checking Account(s) Balance:"
                                id="outlined-full-width"
                                variant="outlined"
                                name='checkingAccountsBalance'
                                type='number'
                                value={this.state.checkingAccountsBalance}
                                onChange={this.handleInputChange} />
                        </Paper>
                        <Paper className={classes.paper}>
                            <TextField
                                label="Savings Account(s) Balance:"
                                id="outlined-full-width"
                                variant="outlined"
                                name='savingsAccountsBalance'
                                type='number'
                                value={this.state.savingsAccountsBalance}
                                onChange={this.handleInputChange} />
                        </Paper>
                        <Paper className={classes.paper}>
                            <TextField
                                label="Retirement Account(s) Balance:"
                                id="outlined-full-width"
                                variant="outlined"
                                name='retirementAccountsBalance'
                                type='number'
                                value={this.state.retirementAccountsBalance}
                                onChange={this.handleInputChange} />
                        </Paper>
                        <Paper className={classes.paper}>
                            <TextField
                                label="Automobile(s) Value:"
                                id="outlined-full-width"
                                variant="outlined"
                                name='automobilesValue'
                                type='number'
                                value={this.state.automobilesValue}
                                onChange={this.handleInputChange} />
                        </Paper>
                        <Paper className={classes.paper}>
                            <TextField
                                label="Other Asset(s) Value:"
                                id="outlined-full-width"
                                variant="outlined"
                                name='other'
                                type='number'
                                value={this.state.other}
                                onChange={this.handleInputChange} />
                        </Paper>
                    </div>
                </form>
            )
       }
}

export default withStyles(useStyles)(assets); 