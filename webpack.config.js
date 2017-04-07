const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports={
    devtool:'cheap-module-eval-source-map',

    entry:[
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],

    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new NpmInstallPlugin()
    ],

    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:['react-hot-loader', 'babel-loader'],
                // query:{
                //     plugins:['transform-runtime']
                // },
                include:[path.resolve(__dirname, 'src')]
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
        // rules:[
        //     {
        //         test:/\.js$/,
        //         loader:['eslint-loader'],
        //         enforce:'pre',
        //         include:[
        //             path.resolve(__dirname, 'src')
        //         ]
        //     }
        // ]
    }
}