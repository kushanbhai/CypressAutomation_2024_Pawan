//before
//after
//beforeeach
//aftereach
describe('handle hooks and tags',()=>{
    before(()=>{
        cy.log('*************  launch app ***************')
    })

    after(()=>{
        cy.log('********* close app ************')
    })

    beforeEach(()=>{
        cy.log('********* Login **************')
    })

    afterEach(()=>{
        cy.log('************* logout **************')
    })
    it('search',()=>{
        cy.log('***********  searching  **************')
    })

    it.skip('advanced search',()=>{
        cy.log('***********  advanced search  ************')
    })
    it.only('listing products',()=>{
        cy.log('************  listing products  **********')
    })
})