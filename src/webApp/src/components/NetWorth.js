import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NWAssets from './NWAssets';
import NWLiab from './NWLiab';
import callNetWorthService from '../apiCalls/callNetWorthService';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

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


class NetWorthPage extends Component {
  constructor(props) {
    super(props);

    const localStorageItem = localStorage.getItem("NetWorthPage");

    if (localStorageItem == null) {
      let state = {
        assets: {
          realEstateValue: 0,
          checkingAccountsBalance: 0,
          savingsAccountsBalance: 0,
          retirementAccountsBalance: 0,
          automobilesValue: 0,
          other: 0
        },
        liabilities: {
          remainingMortgageBalance: 0,
          consumerDebt: 0,
          personalLoans: 0,
          autoLoans: 0,
          studentLoans: 0,
          other: 0
        },
        netWorth: 0
      };
      localStorage.setItem("NetWorthPage", JSON.stringify(state));
      this.state = state;
    } else {
      console.log(localStorageItem);
      this.state = JSON.parse(localStorageItem);
    }

    
    
    this.handleAssetsChange = this.handleAssetsChange.bind(this);
    this.handleLiabChange = this.handleLiabChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
  }

  handleAssetsChange = (event) => {
    const target = event.target;
    const name = target.name;        
    const value = target.value; 

    this.setState(prevState => ({
      assets:{
        ...prevState.assets,
        [name]: value
      }
    }));
  }

  handleLiabChange = (event) => {
    const target = event.target;
    const name = target.name;        
    const value = target.value; 

    this.setState(prevState => ({
      liabilities:{
        ...prevState.liabilities,
        [name]: value
      }
    }));
  }

  handleButtonSubmit = (event) => {
    console.log("The Button Was Clicked");

    callNetWorthService(this.state.assets, this.state.liabilities).then((netWorth) => {
      this.setState({netWorth:netWorth});
      console.log(this.state);
      localStorage.setItem("NetWorthPage", JSON.stringify(this.state));
    });
    
  }
  
  render () {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <NWAssets 
              realEstateValue={this.state.assets.realEstateValue}
              checkingAccountsBalance={this.state.assets.checkingAccountsBalance}
              savingsAccountsBalance={this.state.assets.savingsAccountsBalance}
              retirementAccountsBalance={this.state.assets.retirementAccountsBalance}
              automobilesValue={this.state.assets.automobilesValue}
              other={this.state.assets.other}
              onInputChange={this.handleAssetsChange}
            />
          </Grid>
          <Grid item xs={6}>
            <NWLiab
              remainingMortgageBalance={this.state.liabilities.remainingMortgageBalance}
              consumerDebt={this.state.liabilities.consumerDebt}
              personalLoans={this.state.liabilities.personalLoans}
              autoLoans={this.state.liabilities.autoLoans}
              studentLoans={this.state.liabilities.studentLoans}
              other={this.state.liabilities.other}
              onInputChange={this.handleLiabChange}
            />
          </Grid>
          <Button variant="contained" onClick={this.handleButtonSubmit}>
            Calculate Net Worth
          </Button>
          <Paper>
            <TextField
              label="Net Worth:"
              id="outlined-full-width"
              variant="outlined"
              name='netWorth'
              type='number'
              value={this.state.netWorth}
              InputProps={{
                readOnly: true,
              }}/>
          </Paper>
        </Grid>
      </div>
    )
  }
}

export default withStyles(useStyles)(NetWorthPage);