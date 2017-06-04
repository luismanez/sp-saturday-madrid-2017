const build = require('@microsoft/sp-build-web');

var replacements = require('../config/replacements.json');
var StringReplacePlugin = require("string-replace-webpack-plugin");

build.configureWebpack.mergeConfig({ 
  additionalConfiguration: (generatedConfiguration) => { 
    generatedConfiguration.module.loaders.push([ 
        { test: /\.js$/, loader: StringReplacePlugin.replace({
                replacements: [
                    {
                        pattern: /###(\w*?)###/ig,
                        replacement: function (match, p1, offset, string) {
                            return replacements.web[p1];
                        }
                    }
                ]}) 
        } 
    ]);
    generatedConfiguration.plugins.push(new StringReplacePlugin());

    return generatedConfiguration; 
  } 
});