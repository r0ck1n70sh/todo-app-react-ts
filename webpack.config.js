const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'index_bundle.js'
	},
	target: 'web',
	devServer: {
		port: '5000',
		static: {
			directory: path.join(__dirname, 'public')
		},
		open: true,
		hot: true,
		liveReload: true
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/')
		},
		extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html')
		})
	]
}
