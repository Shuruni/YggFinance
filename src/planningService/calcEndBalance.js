import { request } from "express";

/**
 * 
 * performs the calculation to determine the time ending amount of an investment after some time.
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
    let savingsGoal = requestBody.savingsGoal;
    let planningMode = requestBody.planningMode;

    //combines r/t for simplification, all calculations are monthly (12 periods)
    let rate = avgRate/12;  
     // calcs future value without contributions
    let futureValue = initialAmount * (1 + (rate)) ** (timeFrame * 12);    
     // calcs contributions plus return rate
    let contribWithInt = monthlyContributions * ((((1 + rate) ** (timeFrame * 12)) - 1)/rate); 
    // total end balance plus contributions
    let endBalance = futureValue + contribWithInt;                           
    // Inital investment plus monthly contributins for length of timeFrame
    let totalContributed = initialAmount + (12 * timeFrame * monthlyContributions) 
    // finds total iterest by subtracting principl and contributions    
    let totalInterest = endBalance - totalContributed;   


    // Write the results to the responseBody
    responseBody.endBalance = endBalance;
    responseBody.timeFrame = timeFrame;
    responseBody.startingAmount = initialAmount;
    responseBody.totalContributions = totalContributed;
    responseBody.totalInterest = totalInterest;
}

export default calcEndBalance;