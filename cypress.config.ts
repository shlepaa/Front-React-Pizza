import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			config.baseUrl = Cypress.env('WEB_APP_URL');
			config.video = false;
			config.screenshotOnRunFailure = false;

			return config;
		},
	},
	viewportWidth: 1100,
	viewportHeight: 1160,
});
