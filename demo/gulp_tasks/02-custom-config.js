"use strict";

const build = require('@microsoft/sp-build-web');
const colors = require('colors');

const customConfig = build.subTask('config-subtask', function (gulp, buildConfig, done) {
    this.log(colors.yellow('Getting custom config...'));
    this.log(colors.green(buildConfig.properties.myConfig.spTenantUrl));
    done();
});

const kConfig = build.task('custom-config', customConfig);