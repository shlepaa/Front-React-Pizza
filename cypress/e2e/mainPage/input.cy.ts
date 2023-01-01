describe('Input performance', () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env('CY_PORT') ?? 'http://localhost:8080'}`);
		cy.clearAllLocalStorage();
	});

	it('Different values', () => {
		cy.getWithTestId('all-button')
			.should('have.attr', 'class')
			.and('contain', 'active');

		cy.getWithTestId('search').type('мясная', { delay: 100 });

		cy.getWithTestId('all-button')
			.should('have.attr', 'class')
			.and('not.contain', 'active');

		cy.getWithTestId('pizza-wrapper').should('have.length', 3);
		cy.getWithTestId('page-button').should('not.exist');
		cy.getWithTestId('search').clear();

		cy.getWithTestId('page-button').should('exist');
		cy.getWithTestId('search').type('сырная');
		cy.getWithTestId('pizza-wrapper').should('have.length', 2);
		cy.getWithTestId('page-button').should('not.exist');
		cy.getWithTestId('search').clear();

		cy.getWithTestId('search').type('сладкаяпицца');
		cy.getWithTestId('pizza-wrapper').should('have.length', 1);
		cy.getWithTestId('title-pizza').should('contain.text', 'Сладкая пицца');
		cy.getWithTestId('page-button').should('not.exist');
		cy.getWithTestId('search').clear();

		cy.getWithTestId('search').type('сыр на я');
		cy.getWithTestId('pizza-wrapper').should('have.length', 2);
		cy.getWithTestId('page-button').should('not.exist');
	});

	it('Values that do not exist', () => {
		cy.getWithTestId('all-button')
			.should('have.attr', 'class')
			.and('contain', 'active');

		cy.getWithTestId('search').type('not found value');

		cy.getWithTestId('all-button')
			.should('have.attr', 'class')
			.and('not.contain', 'active');

		cy.getWithTestId('pizza-wrapper').should('not.exist');
		cy.getWithTestId('search').clear();

		cy.getWithTestId('search').type('мяснаяяяяя');
		cy.getWithTestId('pizza-wrapper').should('not.exist');
	});
});
