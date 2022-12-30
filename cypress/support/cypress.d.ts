declare namespace Cypress {
	interface Chainable {
		getWithTestId<K extends keyof HTMLElementTagNameMap>(
			value: string
		): Chainable<JQuery<HTMLElementTagNameMap[K]>>;
	}
}
