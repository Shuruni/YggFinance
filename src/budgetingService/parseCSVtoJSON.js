import fs from "fs";
import csv from "csv-parser";


/**
 * 
 * function to handle the processing of the CSV file
 * 
 * @param {string} filePath the path of the csv file to parse
 * @param {string} hasHeaders is the first row of the csv header information? (true or false)
 * @param {string} merchantColumn which column letter contains the merchant information?
 * @param {string} amountColumn which column letter contains the amount information?
 * @param {string} dateColumn which column letter contains the date information?
 * @returns {Promise} a Promise that resolves to a JSON Array of transaction objects
 */
async function parseCSVtoJSON(filePath, hasHeaders, merchantColumn, amountColumn, dateColumn) {
  return new Promise ((resolve) => {
    let results = [];

    hasHeaders = (String(hasHeaders).toLowerCase() == "true") ? 1 : 0;
    merchantColumn = columnToIndex(merchantColumn);
    amountColumn = columnToIndex(amountColumn);
    dateColumn = columnToIndex(dateColumn);

    fs.createReadStream(filePath)
      .pipe(csv({ headers: false, skipLines: hasHeaders }))
      .on('data', (data) => results.push(data))
      .on('end', () => {
        let transactions = [];

        results.forEach(
          trans => {
            console.log(trans);
            transactions.push(
              { 
                merchant: trans[merchantColumn], 
                amount: parseFloat(trans[amountColumn]), 
                date: new Date(trans[dateColumn]), 
                isReconciled: false 
              });
          });
          
        resolve(transactions);
      });
  });
}

/**
   * Takes in a String containing a single char representing a column on a csv file.
   * The ASCII char code is the received and 97 is subtracted
   * subtracting 97 will sync lowercase 'a' with 0
   * @param {*String} column string containing single char representing a column on csv file
   * @returns column index by number
   */
 function columnToIndex(column) {
  column = column.toLowerCase();
  return column.charCodeAt(0) - 97;
}

export default parseCSVtoJSON;