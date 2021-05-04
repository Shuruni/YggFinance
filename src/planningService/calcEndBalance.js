import { request } from "express";

/**
 * Computes Future value, total contributions, and amount of interest earned for a given savings goal.
 * Uses compound interest formula for calculations
 *  
 * @param {{initialInvestment: number,avgRateOfReturn: number,monthlyContributions: number,planningMode: "boolean",timeFrame: number,savingsGoal: number}} requestBody 
 * @param {{endBalance: number,timeFrame: number,startingAmount: number,totalContributions: number,totalInterest: number}} responseBody 
 */
 function calcEndBalance(requestBody, responseBody) {
    // Read the contents of the requestBody
    let initialAmount = requestBody.initialInvestment;
    let avgRate = requestBody.avgRateOfReturn;
    let monthlyContributions = requestBody.monthlyContributions;
    let timeFrame = requestBody.timeFrame;
    //combines r/t for simplifying use in formulas, all calculations are monthly (12 periods)
    let rate = avgRate/12;  
   
    // calcs future value without contributions
    let futureValue = initialAmount * (1 + (rate)) ** (timeFrame * 12);    
   
    // calcs contributions with return rate compounding
    let contribWithInt = monthlyContributions * ((((1 + rate) ** (timeFrame * 12)) - 1)/rate); 
  
    // Compute outputs
    let endBalance = futureValue + contribWithInt;                           
   
    let totalContributed = initialAmount + (12 * timeFrame * monthlyContributions) 
  
    let totalInterest = endBalance - totalContributed;   


    // Write the results to the responseBody
    responseBody.endBalance = endBalance;
    responseBody.timeFrame = timeFrame;
    responseBody.startingAmount = initialAmount;
    responseBody.totalContributions = totalContributed;
    responseBody.totalInterest = totalInterest;
}

export default calcEndBalance;