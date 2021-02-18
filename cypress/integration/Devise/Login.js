import { loginPath, testUserEmail, testUserPassword, successLoginMessage} from "../../support/utils";

describe("Validate Login", () => {
  it("allows a successful login", () => {
    cy.visit(loginPath);

    cy.get(':nth-child(1) > .flex-shrink').type(testUserEmail)
    cy.get(':nth-child(2) > .flex-shrink').type(testUserPassword)
    cy.get('.btn').click()

    cy.contains(successLoginMessage)
  })
})
