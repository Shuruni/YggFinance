import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

class MBTableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        };
    }

    onCategoryRowChange = (event) => {
        this.props.onCategoryRowChange(event);
    }

    onTransactionRowChange = (event) => {
        this.props.onTransactionRowChange(event);
    }

    onNewTransaction = (event) => {
        this.props.onNewTransaction(event);
    }

    onOpen = (event) => {
        this.setState(prevState => ({open:!prevState.open}));
    }

    getCategoryTransactions(allTransactions, category) {
        return allTransactions.filter((transaction) => {
            return category.transactions.find((id) => (transaction.ID === id)) !== undefined;
        });
    }

    getSpent(categoryTransactions) {
        let spent = 0;
        categoryTransactions.forEach((transaction) => {
            spent += parseFloat(transaction.amount);
        })
        return spent;
    }

    render () {
        const { classes, category, allTransactions, open} = this.props;

        return (
            <React.Fragment>
                {/* Main Category Table Row*/}
                <TableRow className={classes.root} key={category.ID}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={this.onOpen}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <TextField
                            className={classes.textField}
                            id={category.ID}
                            name="name"
                            defaultValue={category.name}
                            onChange={this.onCategoryRowChange}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            className={classes.textField}
                            value={this.getSpent(this.getCategoryTransactions(allTransactions, category))}
                            disabled
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            className={classes.textField}
                            id={category.ID}
                            name="budget"
                            type="number"
                            defaultValue={category.budget}
                            onChange={this.onCategoryRowChange}
                        />
                    </TableCell>
                </TableRow>
                {/* Internal Transactions Tables*/}
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                            Transactions
                        </Typography>
                        <Table size="small" aria-label="transactions">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Merchant</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.getCategoryTransactions(allTransactions, category).map((transaction) => (
                                    <TableRow key={transaction.ID}>
                                        <TableCell>
                                            <TextField
                                                className={classes.textField}
                                                id={transaction.ID}
                                                name="merchant"
                                                defaultValue={transaction.merchant}
                                                onChange={this.onTransactionRowChange}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                className={classes.textField}
                                                id={transaction.ID}
                                                name="amount"
                                                type="number"
                                                defaultValue={transaction.amount}
                                                onChange={this.onTransactionRowChange}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                className={classes.textField}
                                                id={transaction.ID}
                                                name="date"
                                                defaultValue={(new Date(transaction.date)).toLocaleDateString()}
                                                onChange={this.onTransactionRowChange}
                                            />
                                        </TableCell>
                                    </TableRow>))
                                }
                                <TableRow>
                                    <TableCell />
                                    <TableCell>
                                        <Button variant="contained" onClick={this.onNewTransaction}>
                                            <span id={category.ID}>
                                                Add New Transaction
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                    </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>);
    }
}

export default withStyles(useStyles)(MBTableRow);