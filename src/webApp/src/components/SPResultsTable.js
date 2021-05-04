import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    table: {
        minWidth: 60,
    },
});

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

function createData(name, amount) {
    return { name, amount };
}

class SavingsPlannerResultsTable extends Component {
    handleChange = (event) => {
        this.props.onChange(event);
    }
       
    render () {
        const { classes } = this.props;
        const rows = [
            createData('End Balance', currencyFormatter.format(this.props.endBalance)),
            createData('Time Frame', this.props.timeFrame + " year(s)"),
            createData('Starting Amount', currencyFormatter.format(this.props.startingAmount)),
            createData('Total Contributions', currencyFormatter.format(this.props.totalContributions)),
            createData('Total Interest', currencyFormatter.format(this.props.totalInterest)),
        ]
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default withStyles(useStyles)(SavingsPlannerResultsTable);