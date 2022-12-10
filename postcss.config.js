module.exports = {
	plugins: [
		require('postcss-preset-env')({
			browsers: 'last 3 versions',
		}),
		require('autoprefixer'),
		require('postcss-sort-media-queries')({
			sort: 'mobile-first',
		}),
		require('cssnano')({
			preset: [
				'default',
				{
					discardComments: {
						removeAll: true,
					},
				},
			],
		}),
	],
};
