"use strict";

const build = require('@microsoft/sp-build-web');
const colors = require('colors');

const mySubTask1 = build.subTask('first-task-subtask', function (gulp, buildConfig, done) {
    this.log('Hello from my first-task');
    done();
});

const mySubTask2 = build.subTask('second-task-subtask', function (gulp, buildConfig, done) {
    this.log('Hello from my second-task');
    done();
});

var tasksSerie = build.serial([mySubTask1, mySubTask2]);
build.task("tasks-serie", tasksSerie);