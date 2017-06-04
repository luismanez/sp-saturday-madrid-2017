const build = require('@microsoft/sp-build-web');

const myBundle = build.subTask('after-bundle-subtask', function (gulp, buildConfig, done) {
    build.rig.getBundleTask().execute(buildConfig).then(() => {
        this.log('This task executes after spfx bundle');
        done();
    });
});
build.task('after-bundle', myBundle);