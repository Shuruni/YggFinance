import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    textField: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
});

class SavingsPlannerInputFields extends Component {
    handleInputChange = (event) => {
        this.props.onInputChange(event);
    }
       
    render () {
        const { classes, planningMode } = this.props;
        return (
            <div>
                <TextField 
                        className={classes.textField}
                        label="Initial Investment (USD)" 
                        id="outlined-basic" 
                        name="initialInvestment"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.initialInvestment}
                        onChange={this.handleInputChange}
                />
                <TextField 
                    className={classes.textField}
                    label="Average Rate of Return (%)" 
                    id="outlined-basic" 
                    name="avgRateOfReturn"
                    type="number"
                    variant="outlined"
                    defaultValue={this.props.avgRateOfReturn}
                    onChange={this.handleInputChange}
                />
                <TextField 
                        className={classes.textField}
                        label="Years to Grow"
                        id="outlined-basic" 
                        name="timeFrame"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.timeFrame}
                        onChange={this.handleInputChange}
                />
                <div hidden={planningMode === 0} >
                    <TextField 
                        className={classes.textField}
                        label="Monthly Contributions (USD)" 
                        id="outlined-basic" 
                        name="monthlyContributions"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.monthlyContributions}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div hidden={planningMode === 1} >
                    <TextField
                        
                        className={classes.textField}
                        label="Savings Goal"
                        id="outlined-basic" 
                        name="savingsGoal"
                        type="number"
                        variant="outlined"
                        defaultValue={this.props.savingsGoal}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(SavingsPlannerInputFields); 