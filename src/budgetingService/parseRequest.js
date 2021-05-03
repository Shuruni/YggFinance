import parseCSVtoJSON from "./parseCSVtoJSON.js";
/**
 * 
 * parses Request header and file information for further processing
 * 
 * @param {*} req the object containing the request information
 * @returns {Promise} a Promise that resolves to a JSON Array of transaction objects
 */
function parseRequest(req) {
    /**
     * Takes in a String containing a single char representing a column on a csv file.
     * @param {*String} column string containing single char representing a column on csv file
     * @returns column index by number
     */
    function columnToIndex(column) {
        column = column.toLowerCase();
        return column.charCodeAt(0) - 97;
    }
    
    // Retrieve the Headers from req.body
    let hasHeaders = (String(req.body.hasHeaders).toLowerCase() == "true") ? 1 : 0;
    let merchantColumn = columnToIndex(req.body.merchantColumn);
    let amountColumn = columnToIndex(req.body.amountColumn);
    let dateColumn = columnToIndex(req.body.dateColumn);

    // Retrieve the path of the csv file from the req.file fields
    let filePath = req.file.path;

    return parseCSVtoJSON(filePath, hasHeaders, merchantColumn, amountColumn, dateColumn);
}


 

export default parseRequest;