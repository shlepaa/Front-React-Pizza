describe('Main page', () => {
	beforeEach(() => {
		cy.visit('');
		cy.clearAllLocalStorage();
	});

	it('Buttons performance - all pages and part pages', () => {
		cy.getWithTestId('all-pages-button').click();
		cy.getWithTestId('pizza-wrapper').its('length').should('be.gt', 5);

		cy.getWithTestId('part-pages-button').click();
		cy.getWithTestId('pizza-wrapper').its('length').should('be.lt', 6);
	});

	it('Categories buttons performance', () => {
		cy.getWithTestId('all-button')
			.should('have.attr', 'class')
			.and('contain', 'active');

		cy.getWithTestId('type-button').each(($button) => {
			expect($button).attr('class').not.contain('active');
		});
	});

	it('Check pizza block performance', () => {
		cy.getWithTestId('search').type('4 сыра');

		cy.getWithTestId('pizza-wrapper').within(() => {
			cy.getWithTestId('dough-button').then(($dough) => {
				expect($dough[0]).attr('class').contain('active');
				expect($dough[1]).text('традиционное');
				$dough[1]?.click();
			});
			cy.getWithTestId('dough-button').then(($dough) => {
				expect($dough[0]).attr('class').not.contain('active');
				expect($dough[1]).attr('class').contain('active');
			});

			cy.getWithTestId('size-button').then(($size) => {
				expect($size[0]).attr('class').contain('active');
				expect($size[1]).contain.text('30');
				$size[1]?.click();
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

		cy.checkStorage('http://localhost:8080', 'chosenPizzas', [
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

		// cy.url().should('include', 'http://localhost:8080/');
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

	it('Check sort buttons', () => {
		cy.getWithTestId('popup')
			.should('have.attr', 'class')
			.and('not.contain', 'active');

		cy.getWithTestId('open-popuop-button')
			.should('contain.text', 'популярности')
			.click();

		cy.getWithTestId('popup')
			.should('have.attr', 'class')
			.and('contain', 'popupActive');

		cy.getWithTestId('popup').within(() => {
			cy.getWithTestId('sort-button').then(($button) => {
				expect($button[0]).attr('class').contain('active');
				expect($button[1]).attr('class').not.contain('active');
				$button[1]?.click();
			});
			cy.getWithTestId('sort-button').then(($button) => {
				expect($button[1]).attr('class').contain('active');
				expect($button[0]).attr('class').not.contain('active');
			});
		});

		cy.getWithTestId('popup')
			.should('have.attr', 'class')
			.and('not.contain', 'popupActive');

		cy.getWithTestId('pizza-wrapper').each((_element, index) => {
			cy.getWithTestId('price').then(($price) => {
				if ($price[index + 1]) {
					const firstPrice = $price[index]?.textContent
						?.slice(10)
						.slice(0, -2);
					const secondPrice = $price[index + 1]?.textContent
						?.slice(10)
						.slice(0, -2);
					expect(Number(firstPrice)).to.lessThan(Number(secondPrice));
				}
			});
		});

		cy.getWithTestId('sort-up-down-button').click();

		cy.getWithTestId('pizza-wrapper').each((_element, index) => {
			cy.getWithTestId('price').then(($price) => {
				if ($price[index + 1]) {
					const firstPrice = $price[index]?.textContent
						?.slice(10)
						.slice(0, -2);
					const secondPrice = $price[index + 1]?.textContent
						?.slice(10)
						.slice(0, -2);
					expect(Number(firstPrice)).to.greaterThan(
						Number(secondPrice)
					);
				}
			});
		});
	});
});
