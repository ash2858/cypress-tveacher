# cypress-tveacher

1. Clone this repository into your local system. 
2. Open up a terminal and cd into the directory `test-cypress`
3. Do a npm install or yarn to install all the dependecies
4. Run `npx cypress open` for the cypress desktop app to open up
5. Open a new terminal and go into the project directory
6. Run `npx cypress run` to perform all the testing in the fashion as done by a github action
7. After successful completion, add a new file - "cypress.env.json" in the root with the following entries:  
[It would contain the sensitive credentials]
```
{
  "user_password": "****",
  "test_user_password": "***"
}
```
