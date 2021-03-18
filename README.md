# cypress-tveacher

1. Clone this repository into your local system. 
2. Open up a terminal and cd into the directory `test-cypress`
3. Do a npm install or yarn to install all the dependecies
4. After successful completion, add a new file - "cypress.env.json" in the root with the following entries:  
[It would contain the sensitive credentials]
```
{
  "STUDENT_EMAIL": "nilam2267@gmail.com",
  "COMMON_PASSWORD": "********",
  "TEST_USER_EMAIL": "febin@cloudyuga.guru",
  "TEST_USER_PASSWORD": "********",
  "BASE_URL": "https://adarsh.staging.tveacher.com"
}

```
5. Run `npx cypress open` for the cypress desktop app to open up
6. Open a new terminal and go into the project directory
7. Run `npx cypress run` to perform all the testing in the fashion as done by a github action
