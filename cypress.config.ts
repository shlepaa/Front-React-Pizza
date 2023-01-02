import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			config.video = false;
			config.screenshotOnRunFailure = false;
			config.viewportHeight = 1160;
			config.viewportWidth = 1100;

			return config;
		},
	},
});
