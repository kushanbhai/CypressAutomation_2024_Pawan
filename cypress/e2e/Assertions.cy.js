describe("Assertions demo",()=>{
    it("implicit assertions",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .and('contain','orangehrmlive')

       cy.title().should('include','Orange')
       .and('eq','OrangeHRM')
       .and('contain',"HRM")
       cy.get('.orangehrm-login-branding > img').should('be.visible')
       .and('exist')

       cy.xpath("//a").should('have.length',5)
       cy.get('input[name=username]').type('Admin')
       cy.get('input[name=username]').should('have.value','Admin')
       cy.get('input[name=password]').type('admin123')
       cy.get('input[name=password]').should('have.value','admin123')

    })

    it("explicit assertions",()=>{
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       
       cy.get('input[name=username]').type('Admin')
       cy.get('input[name=username]').should('have.value','Admin')
       cy.get('input[name=password]').type('admin123')
       cy.get('input[name=password]').should('have.value','admin123')
       cy.get('button[type="submit"]').click()
       let expName = "Bob Tester"; 
       cy.get(".oxd-userdropdown-name").then((x)=>{
           let actName =  x.text()
           expect(actName).to.equal(expName)

           assert.equal(actName,expName)
        //    assert.notEqual(actName,expName)
       })

    })
})