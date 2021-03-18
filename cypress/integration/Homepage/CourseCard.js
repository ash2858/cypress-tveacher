import {
  userLogin,
  studentEmail,
  explorePath,
  courseTitle,
  courseSymLink,
} from "../../support/utils";

describe("work on the course card elements", () => {
  before(() => userLogin(studentEmail));

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("clicks on the course card", () => {
    cy.visit(explorePath);
    cy.contains(courseTitle).scrollIntoView().wait(1000).click();
    cy.url().should("include", `/courses/${courseSymLink}`);
  });
});
