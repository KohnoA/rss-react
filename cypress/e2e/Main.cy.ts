/// <reference types="cypress" />

describe('testing Main page', () => {
  it('search panel should work correctly', () => {
    cy.visit('/');

    cy.get('input[placeholder="I want to find..."]').should('have.value', '');
    cy.get('button').should('have.text', 'Search');
    cy.get('input[placeholder="I want to find..."]')
      .type('iPhone X')
      .should('have.value', 'iPhone X');
    cy.get('[data-testid=clean-button]').click();
    cy.get('input[placeholder="I want to find..."]').should('have.value', '');
  });

  it('card search should work correctly', () => {
    cy.visit('/');

    cy.get('input[placeholder="I want to find..."]')
      .type('iPhone X')
      .should('have.value', 'iPhone X');
    cy.contains('Search').click();
    cy.get('[data-testid=card]:first-child [data-testid=card-title]').contains('iPhone X');

    cy.get('[data-testid=clean-button]').click();

    cy.get('input[placeholder="I want to find..."]')
      .type('fjhwjekf')
      .should('have.value', 'fjhwjekf');
    cy.contains('Search').click();
    cy.contains('Cards not found');
  });

  it('the state of the search panel and the list of cards should be saved when moving to other pages', () => {
    cy.visit('/');

    cy.get('input[placeholder="I want to find..."]')
      .type('iPhone X')
      .should('have.value', 'iPhone X');
    cy.contains('Search').click();
    cy.get('[data-testid=card]:first-child [data-testid=card-title]').contains('iPhone X');

    cy.contains('About').click();
    cy.contains('Main').click();

    cy.get('input[placeholder="I want to find..."]').should('have.value', 'iPhone X');
    cy.get('[data-testid=card]:first-child [data-testid=card-title]').contains('iPhone X');
  });

  it('correct display of the modal window with card details', () => {
    cy.visit('/');

    cy.get('[data-testid=card]:first-child').click();
    cy.get('[data-testid=modal-content]').should('exist');
    cy.get('[data-testid=details]').should('exist');

    cy.get('[data-testid=modal-close]').click();
    cy.get('[data-testid=modal-content]').should('not.exist');
    cy.get('[data-testid=details]').should('not.exist');
  });
});
