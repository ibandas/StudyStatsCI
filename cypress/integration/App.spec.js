describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('Shows Class Title', () => {
        cy.visit ('/');
        cy.get('[data-cy=class]').should('contain', 'Algorithms');
      });
  });
