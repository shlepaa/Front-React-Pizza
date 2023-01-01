describe('Input', () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env('CY_PORT') ?? 'http://localhost:8080'}/cart`);
	});

	it('Should return on main page when we click on input', () => {
		cy.getWithTestId('search-wrapper').within(() => {
			cy.getWithTestId('link').click();
		});

		cy.url().should('not.contain', '/cart');
	});
});
