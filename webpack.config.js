var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
	envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env')); /* Will grab the values from test.env or development.env */
} catch(e) {
	/* For production. */
}

module.exports = {
	
	/* Where it should start processing your code. */
	entry: [
		'script!jquery/dist/jquery.min.js', /* script loader */
		'script!foundation-sites/dist/foundation.min.js', /* script loader */
		'./app/app.jsx',
	],
	externals: {
		jquery: 'jQuery'	
	},
	plugins: [
		new webpack.ProvidePlugin({				
			$: "jquery", /* allows us to not specify requring jQuery files in jsx files */
			jQuery: "jquery"
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}	
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API_KEY: JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
				STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
			}	
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {			
		root: __dirname, /* variable in node.js that gives path to file you're in */
		modulesDirectories: [
			'node_modules',
			'./app/components',
			'./app/api'
		],
		alias: { /* Webpack aliases */
			app: 'app',
			applicationStyles: 'app/styles/app.scss',
			actions: 'app/actions/actions.jsx',
			reducers: 'app/reducers/reducers.jsx', 
			configureStore: 'app/store/configureStore.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders:  [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')	
		]	
	},
	devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map' /* for debugging, shows actual code not webpack code */
};
