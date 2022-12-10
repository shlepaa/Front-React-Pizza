const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'prod';

module.exports = {
	entry: {
		app: path.resolve(__dirname, '..', './src/index.tsx'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.scss'],
	},
	optimization: {
		moduleIds: 'deterministic',
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.module\.s(a|c)ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: devMode,
							modules: {
								auto: true,
								localIdentName: devMode
									? '[folder]__[local]__[hash:base64:5]'
									: '[hash:base64]',
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: devMode,
							postcssOptions: {
								config: `./postcss.config.js`,
							},
						},
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: devMode },
					},
				],
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: devMode },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: devMode,
							postcssOptions: {
								config: `./postcss.config.js`,
							},
						},
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: devMode },
					},
				],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				generator: {
					emit: false,
				},
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext][query]',
				},
			},
		],
	},
	output: {
		path: path.resolve(__dirname, '..', './build'),
		filename: 'js/[name].[contenthash].js',
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: devMode
				? 'assets/css/[name].css'
				: 'assets/css/[name].[contenthash].css',
			chunkFilename: devMode
				? 'assets/css/[id].css'
				: 'assets/css/[id].[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './src/index.html'),
			inject: 'body',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/assets/img', to: 'assets/img' },
				{ from: 'src/assets/static', to: 'assets/static' },
			],
		}),
	],
	stats: 'errors-only',
};
