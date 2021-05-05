import axios from "axios";

/**
 * 
 * @param {{remainingMortgageBalance: number, consumerDebt: number, personalLoans: number, autoLoans: number, studentLoans: number, other: number}} assets 
 * @param {{realEstateValue: number, checkingAccountsBalance: number, savingsAccountsBalance: number, retirementAccountsBalance: number, automobilesValue: number, other: number}} liabilities 
 * @returns {Promise<{netWorth: number}>} a Promise to return an object containing the netWorth
 */
async function callNetWorthService(assets, liabilities) {
    const response = await axios.post(
        'https://yggfinance.loca.lt/networth-service',
        { 
            assets: assets,
            liabilities: liabilities
        },
        { headers: { 'Content-Type': 'application/json', 'Bypass-Tunnel-Reminder': true } }
    )
    console.log(response.data);
    return response.data.netWorth;
}

export default callNetWorthService;