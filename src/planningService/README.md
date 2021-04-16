# Budgeting Service

webserver that consumes an HTTP POST request on localhost:8080 of `Content-Type="multipart/form-data"` with a req.body of the form:

```JavaScript
{
   hasHeaders: boolean,
   merchantColumn: string,
   amountColumn: string,
   dateColumn: string
}
```

and a req.file of the form:

```JavaScript
{
  fieldname: string,
  originalname: string,
  encoding: string,
  mimetype: string,
  destination: string,
  filename: string,
  path: string,
  size: number
}
```

and is expected to send a response (res) of `Content-Type: "application/json"` with a body of the form:

```JavaScript
{
   transactions: array[Transaction]
}
 
const Transaction = {
   merchant: string,
   amount: number,
   date: string, // (date.toJSON)
   isReconciled: boolean
}
```

## Building

- RUN `npm install` from the `src/budgetingService` folder
- RUN `sudo docker build -t planning-service .`

## Running

- RUN `sudo docker run -dp 8080:8080 planning-service`

## Monitoring

- RUN `docker ps`
   1. COPY the name of the running container `<name>`
- RUN `docker logs -f <name>`
