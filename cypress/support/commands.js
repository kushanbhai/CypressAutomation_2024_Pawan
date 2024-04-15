// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />

Cypress.Commands.add('getIframe',(iframe)=>{
   return cy.get(iframe).its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//custom command for clicking on link using label
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})

//over write contains method so that it can handle both upper case and lower case letters
/* Cypress.Commands.overwriteQuery('contains',(originalFn, subject, filter, text, options = {})=>{
    // determine if a filter argument was passed
    if (typeof text === 'object') {
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false

    return originalFn(subject, filter, text, options)

}) */

//custom command for login
Cypress.Commands.add('loginApp',(email,password)=>{
    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get('.button-1.login-button').click();
})
