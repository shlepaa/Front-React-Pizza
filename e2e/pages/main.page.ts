import Page from './page';

class MainPage extends Page {
	public get getAllOrPartPageButtons() {
		return {
			allPages: $('[data-testid="all-pages-button"]'),
			partPages: $('[data-testid="part-pages-button"]'),
		};
	}

	public get getPizzaWrappers() {
		return $$('[data-testid="pizza-wrapper"]');
	}

	public async switchingPageButtons() {
		await this.getAllOrPartPageButtons.allPages.click();
		await expect(this.getAllOrPartPageButtons.allPages).toHaveElementClass(
			/active/i
		);
		await expect(this.getPizzaWrappers).toBeElementsArrayOfSize({
			gte: 10,
		});
		await this.getAllOrPartPageButtons.partPages.click();
		await expect(this.getAllOrPartPageButtons.partPages).toHaveElementClass(
			/active/i
		);
		await expect(this.getPizzaWrappers).toBeElementsArrayOfSize({
			lte: 5,
		});
	}

	public open() {
		return super.open('');
	}
}

export default new MainPage();
