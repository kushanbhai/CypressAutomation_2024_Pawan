describe('mysuite',()=>{
    it('navigation command',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq','Your Store');
        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.wait(4000)
        cy.get('div>h2').should('have.text','Cameras')
        cy.go('back');
        cy.title().should('eq','Your Store');
        cy.go('forward')
        cy.get('div>h2').should('have.text','Cameras')
        cy.reload();// refresh the page
    })
})