describe('handle dropdowns',()=>{
    it.skip('dropdown with select',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html?src=homepage')
        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
    })

    it.skip('dropdown without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('input.select2-search__field').type('Iran').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')
    })

    it.skip('Auto suggest dropdown',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
        
    })

    it('Dynamic dropdown',()=>{
        cy.visit('https://www.google.co.in/')
        cy.get('textarea[name="q"]').type('cypress automation')
        cy.wait(3000)
        // cy.get('.suggestion-title').contains('Delhi University').click()
        cy.get('div.wM6W7d>span').should('have.length',13)
        cy.get('div.wM6W7d>span').each(($el,index, $list)=>{
            if($el.text()=='cypress automation tutorial'){
                cy.wrap($el).click()
            }
        })
        cy.get('textarea[name="q"]').should('have.value','cypress automation tutorial')
    })
    // cy.get('textarea[name="q"]').should('have.value','cypress automation tool')
})