const webpack = require('webpack');
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const config = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: ['@babel/polyfill', './index.tsx'],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[name][ext][query]'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						// This is required for asset imports in CSS, such as url()
						options: { publicPath: "" },
					},
					"css-loader",
					"sass-loader"
				],
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext][query]'
				}
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.tsx',
			'.ts',
			'.png'
		],
		alias: {
			'@models': path.resolve(__dirname, 'src/models'),
			'@': path.resolve(__dirname, 'src'),
		}
	},
	devServer: {
		port: 8080,
		hot: isDev
	},
	plugins: [
		// new CopyPlugin({
		// 	patterns: [{ from: 'index.html' }],
		// }),
		// new HtmlWebpackPlugin({
		// 	templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
		// 	filename: 'index.html',
		// }),
		new HtmlWebpackPlugin({
			title: 'Test',
			template: './index.html',
			scriptLoading: "blocking",
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin()
	]
};

module.exports = config;