describe('Buttons', () => {
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

		cy.getWithTestId('open-popuop-button').should('contain.text', 'цене');

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
					expect(Number(firstPrice)).to.lte(Number(secondPrice));
				}
			});
		});

		cy.getWithTestId('sort-up-down-button')
			.should('have.attr', 'class')
			.and('contain', 'down');

		cy.getWithTestId('sort-up-down-button').click();

		cy.getWithTestId('sort-up-down-button').should(
			'not.have.attr',
			'class'
		);

		cy.getWithTestId('pizza-wrapper').each((_element, index) => {
			cy.getWithTestId('price').then(($price) => {
				if ($price[index + 1]) {
					const firstPrice = $price[index]?.textContent
						?.slice(10)
						.slice(0, -2);
					const secondPrice = $price[index + 1]?.textContent
						?.slice(10)
						.slice(0, -2);
					expect(Number(firstPrice)).to.gte(Number(secondPrice));
				}
			});
		});

		cy.getWithTestId('open-popuop-button').click();

		cy.getWithTestId('popup').within(() => {
			cy.getWithTestId('sort-button').then(($button) => {
				$button[0]?.click();
			});
		});

		cy.getWithTestId('sort-up-down-button')
			.should('have.attr', 'class')
			.and('contain', 'down');

		cy.getWithTestId('open-popuop-button').should(
			'contain.text',
			'популярности'
		);

		cy.getWithTestId('pizza-wrapper').each((_element, index) => {
			cy.getWithTestId('rating').then(($rating) => {
				if ($rating[index + 1]) {
					expect(Number($rating[index]?.textContent)).to.lte(
						Number($rating[index + 1]?.textContent)
					);
				}
			});
		});

		cy.getWithTestId('sort-up-down-button').click();

		cy.getWithTestId('sort-up-down-button').should(
			'not.have.attr',
			'class'
		);

		cy.getWithTestId('pizza-wrapper').each((_element, index) => {
			cy.getWithTestId('rating').then(($rating) => {
				if ($rating[index + 1]) {
					expect(Number($rating[index]?.textContent)).to.gte(
						Number($rating[index + 1]?.textContent)
					);
				}
			});
		});
	});
});
