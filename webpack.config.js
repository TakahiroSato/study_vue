const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./src/app.js"
	},
	output: {
		path: __dirname + "/bin/",
		filename: "[name].js"
	},
	devtool: "inline-source-map",
	plugins: [
		new CopyWebpackPlugin([{ from: "./src/index.html" }]),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	resolve: {
		alias: {
			vue$: "vue/dist/vue.common.js"
		}
	}
};
