import { IChosenPizza } from '../interfaces/IChosenPizza';
import Page from './page';

class CartPage extends Page {
	public get getPosition() {
		return $('[data-testid="position"]');
	}

	public get getPositionParamsAndButtons() {
		const pizza = this.getPosition;

		return {
			clearButton: pizza.$$('[data-testid="clear-button"]'),
			price: pizza.$('[data-testid="price"]'),
			plusButton: pizza.$('[data-testid="plus-button"]'),
			minusButton: pizza.$('[data-testid="minus-button"]'),
			doughAndSize: pizza.$('[data-testid="params"]'),
			title: pizza.$('[data-testid="position-title"]'),
			count: pizza.$('[data-testid="count"]'),
		};
	}

	public async checkForSimilarity(pizza: IChosenPizza) {
		const position = this.getPositionParamsAndButtons;

		expect(await position.doughAndSize).toHaveText(
			`${pizza.dough} тесто, ${pizza.size} см`
		);
		expect(await position.title).toHaveText(pizza.title);
		expect(await position.count).toHaveText(pizza.count);
		expect(await position.price).toHaveText(pizza.price);
	}

	public open() {
		return super.open('cart');
	}
}

export default new CartPage();
