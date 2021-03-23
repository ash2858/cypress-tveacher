import {
  userLogin,
  studentEmail,
  adminEmail,
  myCoursesPath,
  courseTitle,
  courseSymLink,
  courseOverviewPath,
} from "../../support/utils";

describe("checks the course with free trial on the my courses page", () => {
  before(() => {
    if (cy.getCookie("_cloudyuga_session")) userLogin(studentEmail);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("visits the respective course page and starts the free trial", () => {
    cy.visit(courseOverviewPath);
    cy.contains("Try for Free").scrollIntoView().wait(500).click();
    cy.contains("Start a Free Trial").click();
  });

  it("clicks on the enroll again button", () => {
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

  it("logs the user out", () => {
    cy.get(".relative > .text-white").click();
    cy.contains("Logout").click();
  });
});

describe("revert back the changes done during testing", () => {
  it("logs in as an admin and disenroll the student from the course under testing", () => {
    userLogin(adminEmail);
    // Open the User Management accordion from the sidebar
    cy.get(".text-xs > :nth-child(4)").click();
    // Visit the backstage users table
    cy.contains("Users").click();
    // Open the show page about the specific student user

    cy.contains("neelam agarwal")
      .parent()
      .children()
      .then(($child) => {
        cy.get($child[5])
          .children()
          .then(($child) => {
            cy.get($child[0])
              .children()
              .then(($child) => {
                cy.get($child)
                  .children()
                  .then(($child) => {
                    cy.get($child[0]).click({ force: true });
                  });
              });
          });
      });

    cy.scrollTo("right").wait(1000);
    // Disenroll the student from the course under testing which she enrolled to earlier
      cy.get(
        ":nth-child(4) > :nth-child(6) > div.cursor-pointer > span > .cursor-pointer"
      )
        .scrollIntoView()
        .wait(1000)
        .click();
  });
});
