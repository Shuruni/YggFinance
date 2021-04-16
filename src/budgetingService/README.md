# Budgeting Service

webserver that consumes an HTTP POST request on localhost:8080 of `Content-Type="multipart/form-data"` with a req.body of the form:

```JSON
{
   "hasHeaders": boolean,
   "merchantColumn": string,
   "amountColumn": string,
   "dateColumn": string
}
```

and a req.file of the form:

```JSON
{
  "fieldname": string,
  "originalname": string,
  "encoding": string,
  "mimetype": string,
  "destination": string,
  "filename": string,
  "path": string,
  "size": number
}
```

and is expected to send a response (res) of `Content-Type: "application/json"` with a body of the form:

```JSON
{
   "transactions": [
      {
         "merchant": string,
         "amount": number,
         "date": string, // (date.toJSON)
         "isReconciled": boolean
      },
      {/*Same as above*/}
      // ...
   ]
}
```

## Building

- RUN `npm install` from the `src/budgetingService` folder
- RUN `docker build -t budgeting-service .`

## Running

- RUN `docker run -dp 8080:8080 budgeting-service`

## Monitoring

- RUN `docker ps`
   1. COPY the name of the running container `<name>`
- RUN `docker logs -f <name>`

## Testing

For Testing that the Service is properly receiving and responding to requests, we will be using [Insomnia](https://insomnia.rest/).

1. Install [Insomnia](https://insomnia.rest/)
2. Open the Base Collection called "Insomnia" ![insomnia_testing_1.png](../../documentation/images/insomnia_testing_1.png)
3. Create a new request ![insomnia_testing_2.png](../../documentation/images/insomnia_testing_2.png)
4. Name the request whatever you want (this is for you to keep track of different requests and has no bearing on the request itself).
5. Change the request method to a `POST` request ![insomnia_testing_3.png](../../documentation/images/insomnia_testing_3.png)
6. Change the request body to `Multipart Form` ![insomnia_testing_4_MF.png](../../documentation/images/insomnia_testing_4_MF.png)
7. Hit the create button
8. Set the request URL to `http://localhost:8080` ![insomnia_testing_5_MF.png](../../documentation/images/insomnia_testing_5_MF.png)
9. Fill in test data in the correct form (see description at top of this readme) ![insomnia_testing_6a_budgeting.png](../../documentation/images/insomnia_testing_6a_budgeting.png)
   1. for the file field, select a test csv file you want to send ![insomnia_testing_6b_budgeting.png](../../documentation/images/insomnia_testing_6b_budgeting.png)
10. Send the request
11. If you have properly handled the request in the service:
    1. You should now receive a response code of `200 OK` from the service, with a body of the form mentioned in the description at the top of this page.
    2. If you follow the steps listed in the [Monitoring Section](##Monitoring), you will be able to see the output of your service when it receives the request.
12. With the default setup, your output should look something like this ![insomnia_testing_7_budgeting.png](../../documentation/images/insomnia_testing_7_budgeting.png)
13. **Congratulations!** you are all set for testing your service! From here all you need to do is fiddle with the values you send in your request to test how your API handles different request values.

## Teardown

To teardown the application:

- RUN `docker rm -f <name>`
- RUN `docker rmi budgeting-service`

To remove all npm files for a complete reinstall **(NOTE: Only do if encountering npm errors)**:

- DELETE `src/budgetingService/node_modules`
- DELETE `src/budgetingService/package-lock.json`
