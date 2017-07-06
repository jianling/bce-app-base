
const webpack = require('webpack');

module.exports = {
    entry: {
        lib: [
            '@angular/compiler',
            '@angular/core',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            'ionic-angular',
            'bce-native',
            'echarts',
            'moment',
            'underscore'
        ]
    },
    output: {
        path: 'www/lib',
        filename: '[name].js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'www/lib/[name]-manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ]
};