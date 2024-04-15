describe('Custom commands',()=>{
    it('handling links',()=>{
        cy.visit('https://demo.nopcommerce.com/')
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
       cy.clickLink('Apple MacBook Pro 13-inch')
       cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it.skip('overwriting custom commands',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('APPLE MACBOOK Pro 13-inch')
       cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it('login command',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in');
        cy.loginApp('kushanchoudhury6@gmail.com','Vodafone@123')
        cy.get('.ico-account').should('have.text','My account');
    })
})