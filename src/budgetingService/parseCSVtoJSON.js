
/**
 * 
 * function to handle the processing of the CSV file
 * 
 * @param {*} csv the csv file to parse
 * @param {boolean} hasHeaders does the csv file have headers?
 * @param {string} merchantColumn which column letter contains the merchant information?
 * @param {string} amountColumn which column letter contains the amount information?
 * @param {string} dateColumn which column letter contains the date information?
 */
function parseCSVtoJSON(csv, hasHeaders, merchantColumn, amountColumn, dateColumn) {
    // TO BE IMPLEMENTED
    
    // dummy return
    return [
        {merchant: "merchant1", amount: 7, date: (new Date()).toJSON(), isReconciled: true},
        {merchant: "merchant2", amount: 42, date: (new Date()).toJSON(), isReconciled: true},
        {merchant: "merchant3", amount: 69, date: (new Date()).toJSON(), isReconciled: false}
      ];
}

export default parseCSVtoJSON;