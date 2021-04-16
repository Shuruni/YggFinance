/**
 * 
 * A function that calculates the user’s net worth by adding all assets and subtracting all liabilities
 * 
 * @param {{assets: {realEstateValue: number,checkingAccountsBalance: number,savingsAccountsBalance: number,retirementAccountsBalance: number,automobilesValue: number,other: number},liabilities: {remainingMortgageBalance: number,consumerDebt: number,personalLoans: number,autoLoans: number,studentLoans: number,other: number}}} requestBody 
 * @returns {number} the user's net worth
 */
function calcNetWorth(requestBody) {
    // Read the contents of the requestBody
    let assets = requestBody.assets;
    let liabilities = requestBody.liabilities;

    // TO BE IMPLEMENTED ;)
    // HINT: To read the contents for the assets or liabilities objects, 
    // hover over it in VSCode to see the different <field>s present and then use "assets.<field>"
    // to access them.

    // dummy return value
    let netWorth = 42;

    return netWorth;
}

export default calcNetWorth;