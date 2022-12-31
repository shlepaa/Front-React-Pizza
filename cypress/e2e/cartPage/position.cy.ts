describe('Position buttons performance', () => {
	beforeEach(() => {
		cy.visit('/cart', {
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
		});
	});

	it('Plus and minus buttons', () => {
		cy.getWithTestId('amount-price').should('contain.text', 1410);
		cy.getWithTestId('amount-count').should('contain.text', 4);
		cy.getWithTestId('position').should('have.length', 2);

		cy.getWithTestId('position')
			.first()
			.within(() => {
				cy.getWithTestId('position-title').should(
					'have.text',
					'Охотничьи колбаски'
				);
				cy.getWithTestId('count').should('have.text', 3);
				cy.getWithTestId('price').should('contain.text', 1380);

				cy.getWithTestId('plus-button').click();
				cy.getWithTestId('plus-button').click();
				cy.getWithTestId('count').should('have.text', 5);
				cy.getWithTestId('price').should('contain.text', 2300);

				cy.getWithTestId('minus-button').click();
				cy.getWithTestId('count').should('have.text', 4);
				cy.getWithTestId('price').should('contain.text', 1840);
			});

		cy.getWithTestId('amount-price').should('contain.text', 1870);
		cy.getWithTestId('amount-count').should('contain.text', 5);

		cy.getWithTestId('cart-button-header').within(() => {
			cy.getWithTestId('total-price').should('contain.text', 1870);
			cy.getWithTestId('total-count').should('have.text', 5);
		});

		cy.checkStorage('chosenPizzas', [
			{
				count: 4,
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

		cy.getWithTestId('amount-price').should('contain.text', 1870);
		cy.getWithTestId('amount-count').should('contain.text', 5);

		cy.getWithTestId('cart-button-header').within(() => {
			cy.getWithTestId('total-price').should('contain.text', 1870);
			cy.getWithTestId('total-count').should('have.text', 5);
		});
	});

	it('Remove positions from the list', () => {
		cy.getWithTestId('position').should('have.length', 2);

		cy.getWithTestId('clear-button').each(($button) => {
			$button.trigger('click');
		});

		cy.getWithTestId('position').should('not.exist');
		cy.checkStorage('chosenPizzas', []);
		cy.getWithTestId('cart-button-header').within(() => {
			cy.getWithTestId('total-price').should('contain.text', 0);
			cy.getWithTestId('total-count').should('have.text', 0);
		});
	});

	afterEach(() => {
		cy.clearAllLocalStorage();
	});
});
