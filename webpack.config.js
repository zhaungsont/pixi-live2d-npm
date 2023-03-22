const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		hot: true,
		open: true,
		static: {
			directory: 'dist',
		},
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
