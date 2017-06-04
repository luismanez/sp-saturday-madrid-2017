"use strict";

const build = require('@microsoft/sp-build-web');
const colors = require('colors');

const mySubTask = build.subTask('first-task-subtask', function (gulp, buildConfig, done) {
        this.log(colors.yellow('Hello from my fist-task'));
        done();
    });

const firstTask = build.task('first-task', mySubTask);

exports.Task = firstTask;