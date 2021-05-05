/**
 * 
 * performs the calculation to determine the time frame required to acquire the desired investment value.
 * 
 * @param {{initialInvestment: number,avgRateOfReturn: number,monthlyContributions: number,planningMode: boolean,timeFrame: number,savingsGoal: number}} requestBody 
 * @param {{endBalance: number,timeFrame: number,startingAmount: number,totalContributions: number,totalInterest: number}} responseBody 
 */
function calcMonthlyContributions(requestBody, responseBody) {
    // Read the contents of the requestBody
    let initialInvestment = parseFloat(requestBody.initialInvestment);
    let avgRate = parseFloat(requestBody.avgRateOfReturn);
    let timeFrame = parseInt(requestBody.timeFrame);
    let finalAmount = parseFloat(requestBody.savingsGoal);

   
    //combines r/t for simplifying use in formulas, all calculations are monthly (12 periods)
   let rate = avgRate/12;  
   let effectiveInterest = ((1 + (rate)) ** (timeFrame * 12));
   
   let monthlyContributions = finalAmount/(effectiveInterest/rate);

 
   // Compute outputs
   let endBalance = finalAmount;                           
  
   let totalContributed = initialInvestment + (12 * timeFrame * monthlyContributions) 
 
   let totalInterest = endBalance - totalContributed;   


    // Write the results to the responseBody
    responseBody.endBalance = endBalance;
    responseBody.timeFrame = timeFrame;
    responseBody.monthlyContributions = monthlyContributions;
    responseBody.startingAmount = initialInvestment;
    responseBody.totalContributions = totalContributed;
    responseBody.totalInterest = totalInterest;
}

export default calcMonthlyContributions;