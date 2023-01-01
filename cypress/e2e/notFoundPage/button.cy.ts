describe('Button', () => {
	it('Check back button performance', () => {
		cy.visit(
			`${Cypress.env('CY_PORT') ?? 'http://localhost:8080'}/not-found-url`
		);

		cy.getWithTestId('not-found').within(() => {
			cy.getWithTestId('link')
				.should('have.attr', 'href')
				.and('equal', '/');
			cy.getWithTestId('link').click();
		});

		cy.url().should('not.contain', '/not-found-url');
	});
});
