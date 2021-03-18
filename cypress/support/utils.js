export const railsActiveStorageBlobsPath = "/rails/active_storage/blobs/";

export const explorePath = "/explore";

export const myCoursesPath = "/my/courses";

export const courseOverviewPath = "/courses/test-cypress-3";

export const blogPath = "/blog?page=";

export const loginPath = "/devise/users/sign_in";

export const testUserEmail = Cypress.env("TEST_USER_EMAIL");

export const studentEmail = Cypress.env("STUDENT_EMAIL");

export const testUserPassword = Cypress.env("TEST_USER_PASSWORD");

export const successLoginMessage = "Signed in successfully.";

export const userLogin = (currentEmail) => {
  cy.visit(explorePath);

  cy.contains("Log In").click();

  cy.url().should("include", "/sign_in");

  const userPassword = Cypress.env("COMMON_PASSWORD");

  cy.get('input[name="user[email]"]')
    .type(currentEmail)
    .should("have.value", currentEmail);

  // Login As Student

  cy.get('input[name="user[password]"]')
    .type(userPassword)
    .should("have.value", userPassword);

  cy.get('input[value="Login"]').click();
};
