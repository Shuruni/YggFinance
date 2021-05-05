import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import MBTableRow from './MBTableRow';

// const currencyFormatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2
// });

class MonthlyBudgetCategoryTable extends Component {
    handleChange = (event) => {
        this.props.onChange(event);
    }
       
    createCategory(ID, name, budget, transactions) {
        return {ID, name, budget, transactions};
    }
    
    createTransaction(ID, merchant, amount, date, isReconciled) {
        return { ID, merchant, amount, date, isReconciled};
    }

    onCategoryRowChange = (event) => {
        this.props.onCategoryRowChange(event);
    }

    onTransactionRowChange = (event) => {
        this.props.onTransactionRowChange(event);
    }

    onNewCategory = (event) => {
        this.props.onNewCategory(event);
    }

    onNewTransaction = (event) => {
        this.props.onNewTransaction(event);
    }

    render () {
        const {budgetedMonth, allCategories, allTransactions} = this.props;

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Transactions</TableCell>
                                <TableCell>Category Name</TableCell>
                                <TableCell>Spent</TableCell>
                                <TableCell>Planned</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allCategories.filter((category) => {
                                    return budgetedMonth.categories.find((id) => (category.ID === id)) !== undefined;
                                }).map((category) => ( 
                                    <MBTableRow 
                                        key={category.ID} 
                                        category={category}
                                        allTransactions={allTransactions}
                                        onCategoryRowChange={this.onCategoryRowChange}
                                        onTransactionRowChange={this.onTransactionRowChange}
                                        onNewTransaction={this.onNewTransaction}
                                    /> 
                                ))
                            }
                            <TableRow>
                                <TableCell />
                                <TableCell>
                                    {
                                    <Button variant="contained"
                                        onClick={this.onNewCategory}>
                                        Add New Category
                                    </Button>
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default MonthlyBudgetCategoryTable;