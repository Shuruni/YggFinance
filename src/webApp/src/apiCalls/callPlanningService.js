import axios from "axios";

/**
 * 
 * @param {number} savingsGoal 
 * @param {number} initialInvestment 
 * @param {number} timeFrame 
 * @param {number} avgRateOfReturn 
 * @param {number} monthlyContributions 
 * @param {number} planningMode 
 * @returns {Promise<{endBalance:number, timeFrame:number, startingAmount:number, totalContributions:number, totalInterest:number}>} a Promise to return an object containing the response data
 */
async function callPlanningService(savingsGoal, initialInvestment, timeFrame, avgRateOfReturn, monthlyContributions, planningMode) {
    const response = await axios.post(
        'https://yggfinance.loca.lt/planning-service',
        { 
            savingsGoal: savingsGoal,
            initialInvestment: initialInvestment,
            timeFrame: timeFrame,
            avgRateOfReturn: avgRateOfReturn,
            monthlyContributions: monthlyContributions,
            planningMode: planningMode
        },
        { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data;
}

export default callPlanningService;