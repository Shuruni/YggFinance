import parseCSVtoJSON from "./parseCSVtoJSON.js";
/**
 * 
 * parses Request header and file information for further processing
 * 
 * @param {*} req the object containing the request information
 * @returns {Promise} a Promise that resolves to a JSON Array of transaction objects
 */
function parseRequest(req) {
    // Retrieve the Headers from req.body
    let hasHeaders = req.body.hasHeaders;
    let merchantColumn = req.body.merchantColumn;
    let amountColumn = req.body.amountColumn;
    let dateColumn = req.body.dateColumn;

    // Retrieve the path of the csv file from the req.file fields
    let filePath = req.file.path;

    return parseCSVtoJSON(filePath, hasHeaders, merchantColumn, amountColumn, dateColumn);
}

export default parseRequest;