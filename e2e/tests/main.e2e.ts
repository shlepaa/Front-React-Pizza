import cartPage from '../pages/cart.page';
import MainPage from '../pages/main.page';

describe('Main page', () => {
	it('Adding to cart', async () => {
		await MainPage.open();

		await expect(MainPage.getAllOrPartPageButtons.allPages).toBeExisting();
		await expect(MainPage.getAllOrPartPageButtons.partPages).toBeExisting();
		await expect(
			MainPage.getAllOrPartPageButtons.allPages
		).not.toHaveElementClass(/active/i);

		await MainPage.switchingPageButtons();

		const pizza = await MainPage.addPizzaToCart(2);

		if (pizza) {
			await MainPage.goToCartAndCheck(pizza.price, 2);

			await cartPage.checkForSimilarity(pizza);
		}
	});
});
