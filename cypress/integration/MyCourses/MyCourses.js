import { userLogin, studentEmail, myCoursesPath } from "../../support/utils";

describe("checks the course with free trial on the my courses page", () => {
  it("clicks on the enroll again button", () => {
    userLogin(studentEmail);
    cy.visit(myCoursesPath);
    cy.contains("Test Cypress 3")
      .parent()
      .parent()
      .then(($child) => {
        cy.get($child)
          .contains("Enroll Again")
          .scrollIntoView()
          .wait(500)
          .click();
        cy.url().should(
          "include",
          "/courses/test-cypress-3/confirm_enrollment"
        );
      });
  });
});
