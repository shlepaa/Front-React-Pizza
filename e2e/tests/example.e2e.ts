import MainPage from '../pages/main.page';

describe('My Login application', () => {
	it('should login with valid credentials', async () => {
		await MainPage.open();

		await expect(MainPage.getAllOrPartPageButtons.allPages).toBeExisting();
		await expect(
			MainPage.getAllOrPartPageButtons.allPages
		).not.toHaveElementClass(/active/i);
		await expect(MainPage.getAllOrPartPageButtons.partPages).toBeExisting();
		await MainPage.switchingPageButtons();
	});
});
