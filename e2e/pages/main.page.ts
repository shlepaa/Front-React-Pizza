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

	public get getCartButton() {
		return $('[data-testid="cart-button-header link"]');
	}

	public get getpizzaParamsAndButtons() {
		const pizza = $('[data-testid="pizza-wrapper"]');

		return {
			dough: pizza.$$('[data-testid="dough-button"]'),
			size: pizza.$$('[data-testid="size-button"]'),
			price: pizza.$('[data-testid="price"]'),
			plusButton: pizza.$('[data-testid="plus"]'),
			minusButton: pizza.$('[data-testid="minus"]'),
			addButton: pizza.$('[data-testid="add-button"]'),
			title: pizza.$('[data-testid="title-pizza"]'),
		};
	}

	public async addPizzaToCart(count: number) {
		const pizza = this.getpizzaParamsAndButtons;
		for (let i = 0; i < count; i++) {
			await pizza.plusButton.click();
		}

		await pizza.dough[1]?.click();
		await pizza.size[1]?.click();
		await pizza.minusButton.click();

		const countCheck =
			await this.getpizzaParamsAndButtons.addButton.getText();
		expect(countCheck).toHaveText(`Добавить${count}`);

		const dough = await this.getpizzaParamsAndButtons.dough[1]?.getText();
		const size = await this.getpizzaParamsAndButtons.size[1]?.getText();
		const price = await this.getpizzaParamsAndButtons.price.getText();
		const title = await this.getpizzaParamsAndButtons.title.getText();

		await pizza.addButton?.click();

		if (dough && size) {
			return {
				dough,
				size,
				price,
				title,
				count,
			};
		}

		return;
	}

	public async goToCartAndCheck(
		expectedPrice: string,
		expectedCount: number
	) {
		const carButton = await this.getCartButton.getText();
		expect(carButton).toHaveText(`${expectedPrice} ₽${expectedCount}`);
		await this.getCartButton.click();
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
