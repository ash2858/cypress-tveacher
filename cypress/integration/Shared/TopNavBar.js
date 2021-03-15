import { userLogin, studentEmail, explorePath, myCoursesPath, blogPath } from "../../support/utils";

describe("Check for all the elements inside the navbar", () => {
  before(() => userLogin(studentEmail));

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("checks for the welcome message", () => {
    cy.visit(explorePath);

    cy.contains("Welcome Neelam", { matchCase: false });
  });

  it("checks for the home button", () => {
    cy.contains("Home").click();

    cy.url().should("include", explorePath);
  });

  it("checks for the my courses button", () => {
    cy.contains("My Courses").click();

    cy.url().should("include", myCoursesPath);
  });

  it("checks for the blog button", () => {
    cy.contains("Blog").click();

    cy.url().should("include", blogPath);
  });
});
