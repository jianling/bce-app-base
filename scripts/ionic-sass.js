"use strict";
var path_1 = require('path');
var fs_extra_1 = require('fs-extra');
var node_sass_1 = require('node-sass');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');

var sassConfig = require('../config/common.sass.config.js');

function render(sassConfig) {
    return new Promise(function (resolve, reject) {
        node_sass_1.render(sassConfig, function (sassError, sassResult) {
            if (sassError) {
                // sass render error :(
                reject();
            }
            else {
                // sass render success :)
                renderSassSuccess(sassResult, sassConfig).then(function (outFile) {
                    resolve(outFile);
                }).catch(function (err) {
                    reject();
                });
            }
        });
    });
}
function renderSassSuccess(sassResult, sassConfig) {
    if (sassConfig.autoprefixer) {
        // with autoprefixer
        var autoPrefixerMapOptions = false;
        var postcssOptions = {
            to: path_1.basename(sassConfig.outFile),
            map: autoPrefixerMapOptions
        };
        return postcss([autoprefixer(sassConfig.autoprefixer)])
            .process(sassResult.css, postcssOptions).then(function (postCssResult) {
            postCssResult.warnings().forEach(function (warn) {
                console.log(warn.toString());
            });
            return writeOutput(sassConfig, postCssResult.css);
        });
    }
    return writeOutput(sassConfig, sassResult.css.toString());
}
function writeOutput(sassConfig, cssOutput) {
    return new Promise(function (resolve, reject) {
        console.log("sass start write output: " + sassConfig.outFile);
        var buildDir = path_1.dirname(sassConfig.outFile);
        fs_extra_1.ensureDirSync(buildDir);
        fs_extra_1.writeFile(sassConfig.outFile, cssOutput, function (cssWriteErr) {
            if (cssWriteErr) {
                reject("Error writing css file, " + sassConfig.outFile + ": " + cssWriteErr);
            }
            else {
                console.log("sass saved output: " + sassConfig.outFile);
                // css file all saved
                // note that we're not waiting on the css map to finish saving
                resolve(sassConfig.outFile);
            }
        });
    });
}

render(sassConfig);
