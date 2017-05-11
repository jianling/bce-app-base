const webpack = require('webpack');

module.exports = {
    entry: {
        ionic: [
            '@angular/compiler',
            '@angular/core',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            'ionic-angular',
            'bce-native',
            'echarts'
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