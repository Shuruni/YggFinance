import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import MBTable from './MBTable';
import MBEditTrans from './MBEditTrans';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonGrid: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  reconcileButton: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 200,
  },
});

// {
//   budgetedMonths : array[BudgetMonth]
// }

// const BudgetMonth = {
//   month: number,
//   year: number,
//   categories: array[Category],
//   bankTransactions: array[Transaction]
// }

// const Category = {
//   name: string,
//   budget: number,
//   transactions: array[Transaction]
// }

// const Transaction = {
//   merchant: string,
//   amount: number,
//   date: string, // (date.toJSON)
//   isReconciled: boolean
// }

class MonthlyBudgetPage extends Component {
  constructor(props) {
    super(props);

    const localStorageItem = localStorage.getItem("MonthlyBudgetPage");

    if (localStorageItem == null) {
      const date = new Date();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const currentBudgetMonth = {
        monthYear: month + " " + year,
        categories: [],
        bankTransactions: []
      }
      let state = {
        budgetedMonths: [
          currentBudgetMonth
        ]
      };

      localStorage.setItem("MonthlyBudgetPage", JSON.stringify(state));
      this.state = state;
    } else {
      console.log(localStorageItem);
      this.state = JSON.parse(localStorageItem);
    }
  }

  handleMonthChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    console.log("The Month Was Changed");

    this.setState({[name]: value});
  }

  handleNewMonthButton = (event) => {
    console.log("The New Month Button Was Clicked");

    const newBudgetedMonth = this.createNextBudgetedMonth(this.state.budgetedMonths[0]);

    this.setState(prevState => ({
      budgetedMonths: [newBudgetedMonth, ...prevState.budgetedMonths]
    }), () => {
      console.log(this.state);
      localStorage.setItem("MonthlyBudgetPage", JSON.stringify(this.state));
    });
  }

  createNextBudgetedMonth(prevBudgetedMonth) {
    let [month, year] = prevBudgetedMonth.monthYear.split(" ")
    console.log(month);
    console.log(year);
    year = parseInt(year);

    switch(month){
      case "January": month="February"; break;
      case "February": month="March"; break;
      case "March": month="April"; break;
      case "April": month="May"; break;
      case "May": month="June"; break;
      case "June": month="July"; break;
      case "July": month="August"; break;
      case "August": month="September"; break;
      case "September": month="October"; break;
      case "October": month="November"; break;
      case "November": month="December"; break;
      case "December": month="January"; year+=1; break;
      default: break;
    }

    return {
      monthYear: month + " " + year,
      categories: [],
      bankTransactions: []
    }
  }

  handleSaveChangesButton = (event) => {
    console.log("The Save Changes Button Was Clicked");
    localStorage.setItem("MonthlyBudgetPage", JSON.stringify(this.state));
  }

  handleReconcileButton = (event) => {
    console.log("The Reconcile Button Was Clicked");
    // TODO
  }

  render () {
    const { classes } = this.props;
    const { budgetedMonths } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container className={classes.buttonGrid}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Month</InputLabel>
              <Select
                defaultValue={budgetedMonths[0]}
                name="selectedMonth"
                onChange={this.handleMonthChange}>
                  {budgetedMonths.map((budgetedMonth) => (
                    <MenuItem value={budgetedMonth} key={budgetedMonth.monthYear}>{budgetedMonth.monthYear}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Button variant="contained" onClick={this.handleNewMonthButton}>
                New Month
            </Button>
            <Button variant="contained" onClick={this.handleSaveChangesButton}>
                Save Changes
            </Button>
          </Grid>
          <div item className={classes.reconcileButton}>
            <Button variant="contained" onClick={this.handleReconcileButton}>
              Reconcile
            </Button>
          </div>
        </Paper>
        <Grid container direction="column" spacing={3}>
          <Grid item xs={12}>
            
            <MBEditTrans/>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              History:
            </Paper>
            <MBTable/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(useStyles)(MonthlyBudgetPage);