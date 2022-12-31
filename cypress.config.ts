import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			config.baseUrl = 'http://localhost:8080';
			config.video = false;
			config.screenshotOnRunFailure = false;

			return config;
		},
	},
	viewportWidth: 1100,
	viewportHeight: 1160,
});
