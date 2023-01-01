/// <reference types="cypress" />

Cypress.Commands.add('getWithTestId', (value) => {
	return cy.get(`[data-testid=${value}]`);
});

Cypress.Commands.add(
	'checkStorage',
	(key, item, link = 'http://localhost:8080') => {
		return cy.getAllLocalStorage().then((result) => {
			const currentStorage = result[link];
			if (currentStorage) {
				expect(JSON.parse(currentStorage[key] as string)).to.deep.equal(
					item
				);
			}
		});
	}
);
