describe('Buttons', () => {
	describe('With chosen pizzas', () => {
		beforeEach(() => {
			cy.visit(
				`${Cypress.env('CY_PORT') ?? 'http://localhost:8080'}/cart`,
				{
					onBeforeLoad(win) {
						win.localStorage.chosenPizzas = JSON.stringify([
							{
								count: 3,
								dough: 'тонкое',
								id: '639f6e4e2e2ac7d44dded5a8',
								image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/50555f951a6d4fd4ac0088c099eb3769_292x292.webp',
								price: 460,
								size: '26',
								title: 'Охотничьи колбаски',
							},
							{
								count: 1,
								dough: 'традиционное',
								id: '639f6e4e2e2ac7d44dded5a8',
								image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/50555f951a6d4fd4ac0088c099eb3769_292x292.webp',
								price: 30,
								size: '15',
								title: 'Пицца школьная',
							},
						]);
					},
				}
			);
		});

		it('Clear cart button', () => {
			cy.getWithTestId('amount-price').should('contain.text', 1410);
			cy.getWithTestId('amount-count').should('contain.text', 4);
			cy.getWithTestId('position').should('have.length', 2);

			cy.getWithTestId('clear-all-button').click();
			cy.getWithTestId('position').should('not.have.length');
			cy.getWithTestId('empty-cart').should('exist');
		});

		it('Back to main page button with positions', () => {
			cy.getWithTestId('position').should('have.length', 2);

			cy.getWithTestId('back-button').click();
			cy.url().should('not.include', '/cart');

			cy.getWithTestId('cart-button-header').within(() => {
				cy.getWithTestId('total-price').should('contain.text', 1410);
				cy.getWithTestId('total-count').should('have.text', 4);
			});
		});

		it('Back to main page button without positions', () => {
			cy.getWithTestId('position').should('have.length', 2);

			cy.getWithTestId('clear-all-button').click();
			cy.getWithTestId('back-button').click();
			cy.url().should('not.include', '/cart');

			cy.getWithTestId('cart-button-header').within(() => {
				cy.getWithTestId('total-price').should('contain.text', 0);
				cy.getWithTestId('total-count').should('have.text', 0);
			});
		});

		it('Dependency between cart button params and cart page params', () => {
			cy.getWithTestId('amount-price').should('contain.text', 1410);
			cy.getWithTestId('amount-count').should('contain.text', 4);

			cy.getWithTestId('cart-button-header').within(() => {
				cy.getWithTestId('total-price').should('contain.text', 1410);
				cy.getWithTestId('total-count').should('have.text', 4);
			});
		});

		it('Go to the payment', () => {
			cy.getWithTestId('position').should('have.length', 2);

			cy.getWithTestId('order-button').click();
			cy.url().should('not.include', '/cart');
			cy.url().should('include', '/order');
		});

		afterEach(() => {
			cy.clearAllLocalStorage();
		});
	});

	describe('Without chosen pizzas', () => {
		beforeEach(() => {
			cy.visit(
				`${Cypress.env('CY_PORT') ?? 'http://localhost:8080'}/cart`
			);
		});

		it('Back to main page and check cart button', () => {
			cy.getWithTestId('position').should('not.exist');

			cy.getWithTestId('cart-button-header').within(() => {
				cy.getWithTestId('total-price').should('contain.text', 0);
				cy.getWithTestId('total-count').should('have.text', 0);
			});

			cy.getWithTestId('back-button').click();
			cy.url().should('not.include', '/cart');
		});
	});
});
