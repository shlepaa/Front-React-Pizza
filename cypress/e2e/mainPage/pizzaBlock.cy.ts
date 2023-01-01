describe('Pizza block performance', () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env('CY_PORT') ?? 'http://localhost:8080'}`);
		cy.clearAllLocalStorage();
	});

	it('Check pizza block performance', () => {
		cy.getWithTestId('search').type('4 сыра');

		cy.getWithTestId('pizza-wrapper').should('exist');
		cy.getWithTestId('pizza-wrapper').within(() => {
			cy.getWithTestId('dough-button').then(($dough) => {
				expect($dough[0]).attr('class').contain('active');
				expect($dough[1]).text('традиционное');
				cy.wrap($dough[1]).click();
			});

			cy.getWithTestId('dough-button').then(($dough) => {
				expect($dough[0]).attr('class').not.contain('active');
				expect($dough[1]).attr('class').contain('active');
			});

			cy.getWithTestId('size-button').then(($size) => {
				expect($size[0]).attr('class').contain('active');
				expect($size[1]).contain.text('30');
				cy.wrap($size[1]).click();
			});
			cy.getWithTestId('size-button').then(($size) => {
				expect($size[0]).attr('class').not.contain('active');
				expect($size[1]).attr('class').contain('active');
			});

			cy.getWithTestId('rating').should('contain.text', 4);
			cy.getWithTestId('title-pizza').should('have.text', 'Пицца 4 сыра');

			cy.getWithTestId('price').should('contain.text', 860);
			cy.getWithTestId('count').should('have.text', 1);
			cy.getWithTestId('plus').click();
			cy.getWithTestId('price').should('contain.text', 1720);
			cy.getWithTestId('plus').click();
			cy.getWithTestId('minus').click();
			cy.getWithTestId('price').should('contain.text', 1720);
			cy.getWithTestId('count').should('have.text', 2);

			cy.getWithTestId('add-button').click();
			cy.getWithTestId('price').should('contain.text', 860);
			cy.getWithTestId('count').should('have.text', 1);
		});

		cy.checkStorage('chosenPizzas', [
			{
				count: 2,
				dough: 'традиционное',
				id: '639f6e4e2e2ac7d44dded5a8',
				image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/50555f951a6d4fd4ac0088c099eb3769_292x292.webp',
				price: 860,
				size: '30',
				title: 'Пицца 4 сыра',
			},
		]);
	});
});
