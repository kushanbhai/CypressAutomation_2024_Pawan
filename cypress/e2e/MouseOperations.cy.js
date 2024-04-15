import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('mouse operations',()=>{
    it.skip('mouse hover',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible');
    })

    it.skip('Right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //approach1
       /* cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible') */

        //approach2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    })

    it.skip('Double click action',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick');
        // cy.frameLoaded('#iframeResult');
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');
        cy.wait(5000);
        // cy.get('#demo').should('have.value','Hello World')
    })

    it.skip('drag and drop plugin',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106',{force:true});
    })

    it('scroll the page',()=>{
        cy.visit('http://www.countries-ofthe-world.com/flags-of-the-world.html');
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');
        cy.get(':nth-child(1) > tbody > :nth-child(57) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(57) > :nth-child(1) > img').should('be.visible')
        cy.get('#footer').scrollIntoView()    
    })
})