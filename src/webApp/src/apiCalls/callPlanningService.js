import axios from "axios";

/**
 * 
 * @param {{savingsGoal: savingsGoal, initialInvestment: initialInvestment, timeFrame: timeFrame, avgRateOfReturn: avgRateOfReturn, monthlyContributions: monthlyContributions, planningMode: planningMode}} requestBody
 * @returns {Promise<{endBalance:number, timeFrame:number, startingAmount:number, totalContributions:number, totalInterest:number}>} a Promise to return an object containing the response data
 */
async function callPlanningService(requestBody) {
    const response = await axios.post(
        'https://ygg-dev-1.loca.lt/planning-service',
        requestBody,
        { headers: { 'Content-Type': 'application/json', 'Bypass-Tunnel-Reminder': true } }
    )
    return response.data;
}

export default callPlanningService;