import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import MBCategoryTable from './MBCategoryTable';
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

// const State = {
//   selectedMonth: BudgetMonth,
//   budgetedMonths : array[BudgetMonth],
//   categories: array[Category],
//   lastCategoryID: number,
//   transactions: [Transaction],
//   lastTransactionID: number,
// }

// const BudgetMonth = {
//   name: string,
//   categories: array[ID:number]
// }

// const Category = {
//   ID: number,
//   name: string,
//   transactions: array[ID:number],
//   budget: number
// }

// const Transaction = {
//   ID: number,
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

      // Create Initial transaction, category, and budgetedMonth
      const firstTransaction = this.createTransaction(0, "New", 0, date.toJSON(), false);
      
      const firstCategory = this.createCategory(0, "General", 0, []);
      firstCategory.transactions.push(firstTransaction.ID);

      const firstBudgetedMonth = this.createBudgetedMonth(month + " " + year, []);
      firstBudgetedMonth.categories.push(firstCategory.ID);
      
      // setup state
      const state = {
        budgetedMonths : [
          firstBudgetedMonth
        ],
        selectedMonth: firstBudgetedMonth,
        categories: [
          firstCategory
        ],
        lastCategoryID: firstCategory.ID,
        transactions: [
          firstTransaction
        ],
        lastTransactionID: firstTransaction.ID,
      }

      //save state to localStorage
      localStorage.setItem("MonthlyBudgetPage", JSON.stringify(state));
      this.state = state;
    } else {
      //load state from localStorage
      console.log(localStorageItem);
      this.state = JSON.parse(localStorageItem);
    }
  }

  addNewTransaction(categoryID, merchant = "Unknown", amount = 0, date = (new Date()).toJSON(), newID = this.state.lastTransactionID + 1) {
    const transaction = this.createTransaction(newID, merchant, amount, date, false);
    const categories = this.state.categories.map((category) => {
      if (category.ID == categoryID) {
        category.transactions.push(newID);
      }
      return category;
    });

    this.setState(prevState => ({
      categories: categories,
      transactions:[
        ...prevState.transactions,
        transaction
      ],
      lastTransactionID: newID
    }));
    return transaction;
  }

  createTransaction(ID, merchant, amount, date, isReconciled) {
    return { ID, merchant, amount, date, isReconciled};
  }

  addNewCategory(name = "New Category", budget = 0, newID = this.state.lastCategoryID + 1) {
    const category = this.createCategory(newID, name, budget, []);
    
    const monthName = this.state.selectedMonth.name;
    const value = this.state.budgetedMonths.find((budgetedMonth) => 
      (budgetedMonth.name == monthName));
    const budgetedMonths = this.state.budgetedMonths.map((budgetedMonth) => {
      if (budgetedMonth.name == monthName) {
        budgetedMonth.categories.push(newID);
      }
      return budgetedMonth
    });
    
    this.setState(prevState => ({
      categories:[
        ...prevState.categories,
        category
      ],
      lastCategoryID: newID,
      budgetedMonths:budgetedMonths,
      selectedMonth: value
    }), () => {
      console.log(this.state.categories);
    });
    return category;
  }

  createCategory(ID, name, budget, transactions) {
    return {ID, name, budget, transactions}
  }

  handleMonthChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = this.state.budgetedMonths.find((budgetedMonth) => 
      (budgetedMonth.name == target.value));
    
    console.log("The Month Was Changed");

    this.setState({[name]: value}, () => {
      console.log(this.state);
      localStorage.setItem("MonthlyBudgetPage", JSON.stringify(this.state));
    });
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
    let [month, year] = prevBudgetedMonth.name.split(" ")
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
    const name = month + " " + year

    return this.createBudgetedMonth(name, []);
  }

  createBudgetedMonth(name, categories) {
    return {name, categories};
  }

  handleSaveChangesButton = (event) => {
    console.log("The Save Changes Button Was Clicked");
    localStorage.setItem("MonthlyBudgetPage", JSON.stringify(this.state));
  }

  handleReconcileButton = (event) => {
    console.log("The Reconcile Button Was Clicked");
    // TODO
  }

  onCategoryRowChange = (event) => {
    const target = event.target;
    const id = target.id;
    const name = target.name;
    const value = target.value;

    const categories = this.state.categories.map((category)=>{
      if (category.ID == id) {
        category[name] = value;
      }
      return category;
    })

    console.log(categories);

    this.setState({
      categories: categories
    });
  }

  onTransactionRowChange = (event) => {
    const target = event.target;
    const id = target.id;
    const name = target.name;
    const value = target.value;

    const transactions = this.state.transactions.map((transaction)=>{
      if (transaction.ID == id) {
        transaction[name] = value;
      }
      return transaction;
    })

    console.log(transactions);

    this.setState({
      transactions:transactions
    });
  }

  onNewCategory = (event) => {
    this.addNewCategory();
  };

  onNewTransaction = (event) => {
    const target = event.target;
    const id = target.id;
    this.addNewTransaction(id);
  }
  
  render () {
    const { classes } = this.props;
    const { budgetedMonths, selectedMonth, categories, transactions } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container className={classes.buttonGrid}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Month</InputLabel>
              <Select
                value={selectedMonth.name}
                name="selectedMonth"
                onChange={this.handleMonthChange}>
                  {budgetedMonths.map((budgetedMonth) => (
                    <MenuItem value={budgetedMonth.name} key={budgetedMonth.name}>{budgetedMonth.name}</MenuItem>
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
          <div>
            <MBCategoryTable 
              budgetedMonth={selectedMonth}
              allCategories={categories}
              allTransactions={transactions}
              onCategoryRowChange={this.onCategoryRowChange}
              onTransactionRowChange={this.onTransactionRowChange}
              onNewCategory={this.onNewCategory}
              onNewTransaction={this.onNewTransaction}
            />
          </div>
          <div hidden={true}><MBEditTrans/></div>
        </Paper>
        <Paper className={classes.paper}>
          History:
          <MBTable/>
        </Paper>
      </div>
    )
  }
}

export default withStyles(useStyles)(MonthlyBudgetPage);

// const budgetedMonth = {
//   categories: [0, 1, 2],
//   name: "May 2021"
// }

// const allCategories = [
//   this.createCategory(0, 'General1', 0, [2,5,3]),
//   this.createCategory(1, 'General2', 324, [1,4]),
//   this.createCategory(2, 'General3', 53, [0,9,7]),
//   this.createCategory(3, 'General4', 43, [6,8]),
// ];

// const allTransactions = [
//   this.createTransaction(0, "Merchant 0", 0, (new Date).toJSON(), false),
//   this.createTransaction(1, "Merchant 1", 10, (new Date).toJSON(), false),
//   this.createTransaction(2, "Merchant 2", 20, (new Date).toJSON(), false),
//   this.createTransaction(3, "Merchant 3", 30, (new Date).toJSON(), false),
//   this.createTransaction(4, "Merchant 4", 40, (new Date).toJSON(), false),
//   this.createTransaction(5, "Merchant 5", 50, (new Date).toJSON(), false),
//   this.createTransaction(6, "Merchant 6", 60, (new Date).toJSON(), false),
//   this.createTransaction(7, "Merchant 7", 70, (new Date).toJSON(), false),
//   this.createTransaction(8, "Merchant 8", 80, (new Date).toJSON(), false),
//   this.createTransaction(9, "Merchant 9", 90, (new Date).toJSON(), false)
// ];