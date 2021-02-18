import { railsActiveStorageBlobsPath } from "../../support/utils";

describe("Check logo", () => {
    it.only("should have logo or the site title", () => {
        cy.visit("/explore")

        cy.get('img.h-12')
          .should('have.attr', 'src')
          .should('include',railsActiveStorageBlobsPath)
    })
    it("should have logo which redirects to explore", () => {
        cy.visit("/explore")
    })
})
