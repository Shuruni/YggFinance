import fs from "fs";
import csv from "csv-parser";


/**
 * 
 * function to handle the processing of the CSV file
 * 
 * @param {string} filePath the path of the csv file to parse
 * @param {number} hasHeaders is the first row of the csv header information?
 * @param {number} merchantColumn which column index contains the merchant information?
 * @param {number} amountColumn which column index contains the amount information?
 * @param {number} dateColumn which column index contains the date information?
 * @returns {Promise} a Promise that resolves to a JSON Array of transaction objects
 */
async function parseCSVtoJSON(filePath, hasHeaders, merchantColumn, amountColumn, dateColumn) {
  return new Promise ((resolve) => {
    let results = [];

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

export default parseCSVtoJSON;