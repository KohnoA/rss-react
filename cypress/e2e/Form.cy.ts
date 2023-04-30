/// <reference types="cypress" />

describe('testing Form page', () => {
  it('a message should be displayed that the cards have not yet been created', () => {
    cy.visit('/form');

    cy.contains('No cards yet');
  });

  it('Validation should work if the fields are empty', () => {
    cy.visit('/form');

    cy.contains('Create New Card').click();
    cy.get('[data-testid=error-message]').should('have.length', 8);
  });

  it('upon successful completion of the form, a message should appear and the card should be created', () => {
    cy.visit('/form');

    cy.contains('Product name:').type('User card');
    cy.contains('Price (€):').type('49.99');
    cy.contains('Rate:').type('5');
    cy.contains('Date of purchase:').type('2023-12-12');
    cy.contains('Category:').type('electronics');
    cy.get('select').select('electronics').should('have.value', 'electronics');
    cy.contains('Photo').selectFile('cypress/fixtures/mock-image.jpg');
    cy.contains('I want to sell urgently').click();
    cy.contains('New').click();

    cy.contains('Create New Card').click();

    cy.contains('Successful, card created').should('be.visible');
    cy.contains('User card').should('exist');

    cy.contains('Main').click();
    cy.contains('Form').click();
    cy.contains('User card').should('exist');
  });
});
