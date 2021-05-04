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
    
    // Hold the total sums of assets and liabilities
    let totalAssets = 0;
    let totalLiabilities = 0;

    // Iterate through each networth item to calc total of assets and liabilities
    for (const prop1 in assets){
        totalAssets += parseInt(assets[prop1],10);
    }

    for (const prop2 in liabilities){
        totalLiabilities += parseInt(liabilities[prop2],10);
    }

    // perform assets - liabilities calc
    let netWorth = (totalAssets - totalLiabilities);
    // return networth
    return netWorth;
}

export default calcNetWorth;