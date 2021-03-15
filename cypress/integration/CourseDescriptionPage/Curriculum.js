import { userLogin, studentEmail, explorePath } from "../../support/utils";

describe("Verify the chapters on the course overview page curriculum", () => {
  before(() => {
    if (cy.getCookie("_cloudyuga_session")) userLogin(studentEmail);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("searches for the course", () => {
    cy.visit(explorePath);

    cy.get("#all-courses").scrollIntoView().wait(1000);

    cy.get("input[placeholder='Search Courses']").type("test cypress 3");
  });

  it("clicks on the course card", () => {
    cy.contains("Test Cypress 3").scrollIntoView().wait(1000).click();
    cy.url().should("include", "/courses/test-cypress-3");
    cy.contains("Course Curriculum").scrollIntoView().wait(500);
    cy.get(".course-accordion").contains("Two Chapters Section");
    cy.get(".course-accordion").contains("Four Chapters Section");
  });
});
