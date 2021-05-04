import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SPResultsTable from './SPResultsTable'
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import SPInputFields from './SPInputFields';
import callPlanningService from '../apiCalls/callPlanningService';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  switchContent: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class SavingsPlannerPage extends Component {
  constructor(props) {
    super(props);

    const localStorageItem = localStorage.getItem("SavingsPlannerPage");

    if (localStorageItem == null) {
      let state = {
        input: {
          savingsGoal: 0,  
          initialInvestment: 0,
          timeFrame: 0,
          avgRateOfReturn: 0,
          monthlyContributions: 0,
          planningMode: 1,
        },
        output: {
          endBalance: 0,
          timeFrame: 0,
          startingAmount: 0,
          totalContributions: 0,
          totalInterest: 0
        }
      };
      localStorage.setItem("SavingsPlannerPage", JSON.stringify(state));
      this.state = state;
    } else {
      console.log(localStorageItem);
      this.state = JSON.parse(localStorageItem);
    }
  }

  handleInputTextFieldChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => ({
      input:{
        ...prevState.input,
        [name]: value
      }
    }));
  }

  handleOutputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => ({
      output:{
        ...prevState.output,
        [name]: value
      }
    }));
  }

  handleSwitchChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.checked? 1 : 0;

    this.setState(prevState => ({
      input:{
        ...prevState.input,
        [name]: value
      }
    }));
  }

  handleButtonSubmit = (event) => {
    console.log("The Button Was Clicked");

    callPlanningService(this.state.input).then((output) => {
      this.setState({output:output}, () => {
        console.log(this.state);
        localStorage.setItem("SavingsPlannerPage", JSON.stringify(this.state));
      });
    });
  }
  
  render () {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={6}>
              <SPInputFields
                savingsGoal={this.state.input.savingsGoal} 
                initialInvestment={this.state.input.initialInvestment}
                timeFrame={this.state.input.timeFrame}
                avgRateOfReturn={this.state.input.avgRateOfReturn}
                monthlyContributions={this.state.input.monthlyContributions}
                planningMode={this.state.input.planningMode}
                onInputChange={this.handleInputTextFieldChange}
              />
            </Grid>
            <Grid item xs={6}>
              <SPResultsTable
                endBalance={this.state.output.endBalance}
                timeFrame={this.state.output.timeFrame}
                startingAmount={this.state.output.startingAmount}
                totalContributions={this.state.output.totalContributions}
                totalInterest={this.state.output.totalInterest}
                onChange={this.handleOutputChange}
              />
            </Grid>
          </Grid>
          <b>Planning Mode</b>
          <div className={classes.switchContent}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              Project Contributions
              <Switch 
                color="primary"
                name="planningMode"
                checked={this.state.input.planningMode === 1}
                onChange={this.handleSwitchChange}/>
              Project End Balance
            </FormGroup>
          </FormControl>
          </div>
          <Button variant="contained" onClick={this.handleButtonSubmit}>
              Calculate
          </Button>
        </Paper>
      </div>
    )
  }
}

export default withStyles(useStyles)(SavingsPlannerPage);