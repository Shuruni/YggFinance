/**
 * 
 * performs the calculation to determine the time frame required to acquire the desired investment value.
 * 
 * @param {{initialInvestment: number,avgRateOfReturn: number,monthlyContributions: number,planningMode: boolean,timeFrame: number,savingsGoal: number}} requestBody 
 * @param {{endBalance: number,timeFrame: number,startingAmount: number,totalContributions: number,totalInterest: number}} responseBody 
 */
function calcTimeFrame(requestBody, responseBody) {
    // Read the contents of the requestBody
    let initialInvestment = requestBody.initialInvestment;
    let avgRateOfReturn = requestBody.avgRateOfReturn;
    let monthlyContributions = requestBody.monthlyContributions;
    let timeFrame = requestBody.timeFrame;
    let savingsGoal = requestBody.savingsGoal;

    // TO BE IMPLEMENTED ;)

    // Write the results to the responseBody
    responseBody.endBalance = 0;
    responseBody.timeFrame = 0;
    responseBody.startingAmount = 0;
    responseBody.totalContributions = 0;
    responseBody.totalInterest = 0;
}

export default calcTimeFrame;