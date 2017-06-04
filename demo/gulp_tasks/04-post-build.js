"use strict";

const build = require('@microsoft/sp-build-web');

const customCdnTask = build.subTask('custom-cdn-subtask', function (gulp, buildConfig, done) {
    
    if (buildConfig.production) {
        let targetCdn = buildConfig.args['target-cdn'];
        if (targetCdn) {
            this.log('Overwritting CDN path...');
            build.writeManifests.taskConfig.cdnBasePath = targetCdn;
        } else {
            this.log("using target-cdn from write-manifest.json file");
        }
    } else {
        this.log("using localhost target-cdn");
    }       
    done();
});

build.rig.addPostBuildTask(customCdnTask);

// // execute after TypeScript task
// build.rig.addPostTypescriptTask(helloWorldTask);

// //@deprecated (same as addPostTypescriptTask). Wrong documented on MSDN
// build.rig.addBuildTasks(helloWorldTask);

// //execute after all tasks
// build.rig.addPostBuildTask(helloWorldTask);

// //execute before all tasks
// build.rig.addPreBuildTask(helloWorldTask);