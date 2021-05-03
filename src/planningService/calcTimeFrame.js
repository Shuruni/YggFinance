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
    let avgRate = requestBody.avgRateOfReturn;
    let monthlyContributions = requestBody.monthlyContributions;
    let finalAmount = requestBody.savingsGoal;

    // TO BE IMPLEMENTED ;)
    //Compound interest formula t = ln(A/P) / n[ln(1 + r/n)]
   
    //combines r/t for simplifying use in formulas, all calculations are monthly (12 periods)
   let rate = avgRate/12;  
   
   let timeFrame = Math.log(finalAmount / initialInvestment) / (12 * (Math.log(1 + (rate))));

   // calcs future value without contributions
   let futureValue = initialInvestment * (1 + (rate)) ** (timeFrame * 12);    
  
   // calcs contributions with return rate compounding
   let contribWithInt = monthlyContributions * ((((1 + rate) ** (timeFrame * 12)) - 1)/rate); 
 
   // Compute outputs
   let endBalance = futureValue + contribWithInt;                           
  
   let totalContributed = initialAmount + (12 * timeFrame * monthlyContributions) 
 
   let totalInterest = endBalance - totalContributed;   


    // Write the results to the responseBody
    responseBody.endBalance = endBalance;
    responseBody.timeFrame = timeFrame;
    responseBody.startingAmount = initialInvestment;
    responseBody.totalContributions = totalContributed;
    responseBody.totalInterest = totalInterest;
}

export default calcTimeFrame;