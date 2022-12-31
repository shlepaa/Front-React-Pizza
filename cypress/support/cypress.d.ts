declare namespace Cypress {
	interface Chainable {
		getWithTestId<K extends keyof HTMLElementTagNameMap>(
			value: string
		): Chainable<JQuery<HTMLElementTagNameMap[K]>>;
	}
}

declare namespace Cypress {
	interface Chainable {
		checkStorage(
			key: string,
			item: any,
			link?: string
		): Chainable<Cypress.StorageByOrigin>;
	}
}
