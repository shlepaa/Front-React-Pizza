import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			config.video = false;
			config.screenshotOnRunFailure = false;

			return config;
		},
	},
	viewportWidth: 1100,
	viewportHeight: 1160,
});
