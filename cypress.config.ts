import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:8080',
	},
	viewportWidth: 1100,
	viewportHeight: 1160,
});
