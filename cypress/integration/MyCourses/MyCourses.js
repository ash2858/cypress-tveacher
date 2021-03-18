import {
  userLogin,
  studentEmail,
  myCoursesPath,
  courseTitle,
  courseSymLink,
} from "../../support/utils";

describe("checks the course with free trial on the my courses page", () => {
  it("clicks on the enroll again button", () => {
    userLogin(studentEmail);
    cy.visit(myCoursesPath);
    cy.contains(courseTitle)
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
          `/courses/${courseSymLink}/confirm_enrollment`
        );
      });
  });
});
