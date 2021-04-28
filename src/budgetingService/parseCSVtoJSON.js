import * as fs from "fs";
import csv from "csv-parser";


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
function parseCSVtoJSON(filePath, hasHeaders, merchantColumn, amountColumn, dateColumn) {

  const results = [];
  var hasHeaders = true;
  var keys = [];
  var transactions = [];
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

  merchantColumn = columnToIndex(merchantColumn);
  amountColumn = columnToIndex(amountColumn);
  dateColumn = columnToIndex(dateColumn);


  fs.ReadStream(filePath)
    .pipe(csv({ headers: false, skipLines: 1 }))
    .on('data', (data) => results.push(data))
    .on('end', () => {

      keys = Object.keys(results);

      results.forEach(trans =>
        transactions.push(
          { merchant: trans[merchantColumn], amount: parseFloat(trans[amountColumn]), date: new Date(trans[dateColumn]), isReconciled: true }
        ));

      //console.log(transactions);

    });

    console.log(transactions);

  /*dummy return
  return [
    , { merchant: "merchant1", amount: 7, date: (new Date()).toJSON(), isReconciled: true },
    { merchant: "merchant2", amount: 42, date: (new Date()).toJSON(), isReconciled: true },
    { merchant: "merchant6", amount: 69, date: (new Date()).toJSON(), isReconciled: false }
  ];*/

  return transactions;
}

export default parseCSVtoJSON;