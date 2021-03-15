export const railsActiveStorageBlobsPath = "/rails/active_storage/blobs/";

export const explorePath = "/explore";

export const loginPath = "/devise/users/sign_in";

export const testUserEmail = "febin@cloudyuga.guru";

export const testUserPassword = Cypress.env("test_user_password");

export const successLoginMessage = "Signed in successfully.";

export const userLogin = (currentEmail) => {
  cy.visit(explorePath);

  cy.contains("Log In").click();

  cy.url().should("include", "/sign_in");

  const userPassword = Cypress.env("user_password");

  cy.get('input[name="user[email]"]')
    .type(currentEmail)
    .should("have.value", currentEmail);

  // Login As Student

  cy.get('input[name="user[password]"]')
    .type(userPassword)
    .should("have.value", userPassword);

  cy.get('input[value="Login"]').click();
};
