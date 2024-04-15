describe("check ui elements",()=>{
   /* it("checking radio buttons",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#female").should("be.visible")
        cy.get("#male").should('be.visible')

        //selecting radio buttons
        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')

        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')
    }) */

    it("checking checkboxes",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#monday").should("be.visible")
       

        //selecting single checkbox
        cy.get("#monday").check().should('be.checked')
        cy.get("#monday").uncheck().should('not.be.checked')

        //selecting all the checkboxes

        cy.get('.form-check-input[type=checkbox]').check().should('be.checked')
        cy.get('.form-check-input[type=checkbox]').uncheck().should('not.be.checked')

        cy.get('.form-check-input[type=checkbox]').first().check().should('be.checked')
        cy.get('.form-check-input[type=checkbox]').last().check().should('be.checked')
       
    })
})