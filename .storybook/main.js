const custom = require('../webpack/webpack.common.js');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	staticDirs: ['../src/assets/img', '../src/assets/static'],
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				transcludeMarkdown: true,
			},
		},
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-react-router-v6',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			extends: '../tsconfig.json',
		},
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.s(a|c)ss$/,
			exclude: /\.module.(s(a|c)ss)$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'sass-loader',
			],
		});

		config.module.rules.push({
			test: /\.module\.s(a|c)ss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: {
							auto: true,
							localIdentName:
								'[folder]__[local]__[hash:base64:5]',
						},
					},
				},
				'postcss-loader',
				'sass-loader',
			],
		});

		const newRules = config.module.rules.map((rule) => {
			if (rule.test.test('.svg')) {
				return {
					test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
					type: 'asset/resource',
					generator: { filename: 'static/media/[path][name][ext]' },
				};
			}
			return rule;
		});

		newRules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return { ...config, module: { ...config.module, rules: newRules } };
	},
};
