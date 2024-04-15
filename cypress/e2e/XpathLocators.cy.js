describe('Xpath Locators', () => {
    it("find no of products",()=>{
        cy.visit("http://www.automationpractice.pl/index.php?id_category=8&controller=category")
        cy.xpath("//ul[@class='product_list grid row']//li//div[@class='product-container']").should('have.length',5)
    })
});