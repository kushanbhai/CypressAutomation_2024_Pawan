describe('CSSLocators',()=>{
    it("css locators",()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('input#search_query_top').type('T-Shirts')
        cy.get('button[name="submit_search"]').click()
        cy.get('span.lighter').contains("T-Shirts")   //assertion
    })
})