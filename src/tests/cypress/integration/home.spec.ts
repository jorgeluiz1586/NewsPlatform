import {} from 'cypress';

describe('News Home Screen Test', () => {
    it('Show if news are rendering correctily!', () => {
        cy.visit('/');
        cy.wait(10000)
    });
});