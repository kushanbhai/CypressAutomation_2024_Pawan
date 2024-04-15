describe('My First Test', () => {
    it('test1-verify title', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
    })

    it('test2-verify title neg test', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM123')
    })
  })