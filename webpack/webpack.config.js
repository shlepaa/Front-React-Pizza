const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
	const envConfig = require(`./webpack.${
		process.env.NODE_ENV === undefined ? env : process.env.NODE_ENV
	}.js`);
	const config = merge(commonConfig, envConfig);
	return config;
};
