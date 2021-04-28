import parseCSVtoJSON from "./parseCSVtoJSON.js";
/**
 * 
 * parses Request header and file information for further processing
 * 
 * @param {*} req the object containing the request information
 */
function parseRequest(req) {
    // Retrieve the Headers from req.body
    let hasHeaders = req.body.hasHeaders;
    let merchantColumn = req.body.merchantColumn;
    let amountColumn = req.body.amountColumn;
    let dateColumn = req.body.dateColumn;

    // Retrieve the file using the information in the req.file fields
    // {
    //     "fieldname": string,
    //     "originalname": string,
    //     "encoding": string,
    //     "mimetype": string,
    //     "destination": string,
    //     "filename": string,
    //     "path": string,
    //     "size": number
    // }

    let csv = req.file.path;


    // IMPLEMENT THIS FUNCTION YOURSELF in parseCSVtoJSON.js
    return parseCSVtoJSON(csv, hasHeaders, merchantColumn, amountColumn, dateColumn);
}

export default parseRequest;