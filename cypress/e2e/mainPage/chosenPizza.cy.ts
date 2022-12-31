describe('Chosen pizza', () => {
	beforeEach(() => {
		cy.visit('');
		cy.clearAllLocalStorage();
	});

	it('Add pizza with other params to cart and then check for validation in cart', () => {
		cy.getWithTestId('all-button')
			.should('have.attr', 'class')
			.and('contain', 'active');

		cy.getWithTestId('search').type('4 сыра');

		cy.getWithTestId('all-button')
			.should('have.attr', 'class')
			.and('not.contain', 'active');

		cy.getWithTestId('pizza-wrapper').within(() => {
			cy.getWithTestId('dough-button').then(($dough) => {
				const dough = $dough[1];
				expect(dough).text('традиционное');
				dough?.click();
			});

			cy.getWithTestId('size-button').then(($size) => {
				const size = $size[1];
				expect(size).contain.text('30');
				size?.click();
			});

			cy.getWithTestId('price').should('contain.text', 860);
			cy.getWithTestId('count').should('have.text', 1);
			cy.getWithTestId('plus').click();
			cy.getWithTestId('price').should('contain.text', 1720);

			cy.getWithTestId('add-button').click();
		});

		cy.getWithTestId('total-price').should('contain.text', '1720');
		cy.getWithTestId('total-count').should('have.text', '2');
		cy.getWithTestId('cart-button-header')
			.should('have.attr', 'href')
			.and('contain', 'cart');
		cy.getWithTestId('cart-button-header').click();

		cy.url().should('include', '/cart');

		cy.getWithTestId('position').within(() => {
			cy.getWithTestId('position-title').should(
				'have.text',
				'Пицца 4 сыра'
			);
		});

		cy.getWithTestId('params').should(
			'contain.text',
			'традиционное тесто, 30'
		);

		cy.getWithTestId('count').should('have.text', '2');

		cy.getWithTestId('price').should('contain.text', '1720');
	});
});
