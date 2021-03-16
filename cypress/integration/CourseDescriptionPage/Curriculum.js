import { userLogin, studentEmail, explorePath } from "../../support/utils";

describe("Verify the chapters on the course overview page curriculum", () => {
  before(() => {
    if (cy.getCookie("_cloudyuga_session")) userLogin(studentEmail);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("searches for the course and clicks on the course card", () => {
    cy.visit(explorePath);

    cy.get("#all-courses").scrollIntoView().wait(1000);

    cy.get("input[placeholder='Search Courses']").type("test cypress 3");

    cy.contains("Test Cypress 3").scrollIntoView().wait(1000).click();
  });

  it("verifies the sections present on the course overview page", () => {
    cy.contains("Course Curriculum").scrollIntoView().wait(500);
    cy.get(".course-accordion").contains("Two Chapters Section");
    cy.get(".course-accordion").contains("Four Chapters Section");
  });

  it("verifies the chapters present on the curriculum", ()=>{
    cy.get(':nth-child(1) > a > p > .font-bold').contains("Enabled Preview and Published Chapter")
    cy.get(':nth-child(2) > a > p > .font-bold').contains("Enabled Preview and Published Chapter")

    cy.get(".course-accordion").contains("Two Chapters Section").click();
    cy.get(".course-accordion").contains("Four Chapters Section").click();

    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > a > p > .font-bold').contains("Three Lessons Chapter")
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > a > p > .font-bold').contains("No Preview Published Chapter")
  })

  it("checks for the lock and unlocked icons", ()=>{
    cy.get(':nth-child(1) > a > p > .inline-block').should("have.attr", "src", "/packs/images/lock_open-e0513700011dae902f73a4b60fd8ae19.svg")
    cy.get(':nth-child(2) > a > p > .inline-block').should("have.attr", "src", "/packs/images/icon_lock-d9561e6b1d46b93be9e68bdc5c5afb71.svg")
  })
});
