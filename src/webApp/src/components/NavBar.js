import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SavingsPlanner from './SavingsPlanner';
import MonthlyBudget from './MonthlyBudget';
import NetWorth from './NetWorth';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}
  
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
  
function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="YggFinance" disabled  />
          <LinkTab label="Welcome" href="/Welcome" {...a11yProps(1)} />
          <LinkTab label="Savings Planner" href="/SavingsPlanner" {...a11yProps(2)} />
          <LinkTab label="Monthly Budget" href="/MonthlyBudget" {...a11yProps(3)} />
          <LinkTab label="Net Worth" href="/NetWorth" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Typography variant="h3" gutterbottom>
              Welcome to YggFinance!
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              ____________________________________________________________________________________________________________________________________________________________________________________________________________   
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              Above, you will see the Navigation Bar. The tabs are labelled "Welcome", "Savings Planner",
              "Monthly Budget", and "Net Worth". Currently, you are on the "Welcome" tab. This page will
              inform you on the purposes of the other tabs and what tools they have for your usage.
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              ____________________________________________________________________________________________________________________________________________________________________________________________________________   
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              The Savings Planner tab will give you access to our Savings Planning function. This
              function has two selectable planning modes: Contributions and Savings Goal. While in Contributions
              mode, the planner will ask you for an input of an initial investment, average rate of return
              on the investment, your expected final savings goal, and how many years you
              expect to let your investment grow. Below these fillable text boxes will be a button to calculate
              results. To the right of your entries, you will be able to view the calculated results and data
              including your savings ending balance, the time frame of saving, the amount you started with, the
              amount of contributions needed monthly, and total interest made on the investment.
              If the selectable slider button is engaged, the Savings Planner will change to Savings Goal mode.
              Inputs and outputs are similar, but this page solves for an amount of savings you wish to reach instead
              of a planned amount to give each month. The time frame output on this mode will let you know how long it
              will take to reach your specified savings goal with your specific conditions that were applied.
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              ____________________________________________________________________________________________________________________________________________________________________________________________________________   
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              The Monthly Budget tab will give you access to a budgeting tool. This tool will allow you to make a
              budget for each month by using an interactive table. Buttons will be available to save changes, start a new
              month, and to select which month you would like to view from previous entries. The collapsible table will have
              editable regions for categories you plan to budget, the amount you have spent to date, and the total amount you
              have budgeted to spend for the month selected. Below this table is a field to enter transactions. These
              transactions require a merchant name, the amount spent, and the date of the transaction. You may save changes
              after entering a transaction, which will process the transaction into your month's data. After finishing the
              transactions for your month, or for past months, you may choose to reconcile transactions by selecting the
              reconcile button. This will convert the page to reconciliation mode, which will give you the option of uploading
              a CSV document of transactions from your bank statements. The page will allow you to view self-recorded statements
              and compare them to statements from the bank. This will allow you to view any discrepancies and possibly find
              fraudulent charges. Totals for amounts spent in both the self-reported and bank-reported sections will appear at the
              bottom of the tables. You will be able to edit values in the tables in case there is some error in previously inputted
              data or in the bank statement. Once your totals match, your selected month is reconciled and saved into that month's
              history for viewing.
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              ____________________________________________________________________________________________________________________________________________________________________________________________________________   
          </Typography>
          <Typography variant="body1" display="block" gutterbottom>
              The Net Worth page will allow you to track your personal simple net worth. The page has editable text fields with
              labeled categories for assets and liabilities. There are prelabled categories that may be helpful information to
              see how much of your assets and liabilities consist of those common categories. There are also categories labeled
              "other" in both sections to allow users to enter in assets and liabilities that may be less common.
              When all values have been put in, you can press the calculate button to view your net worth in the box labeled "Net Worth".
          </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SavingsPlanner/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MonthlyBudget/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NetWorth/>
      </TabPanel>
    </div>
  );
}

export default NavTabs;