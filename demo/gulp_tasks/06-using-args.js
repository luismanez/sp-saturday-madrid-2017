const build = require('@microsoft/sp-build-web');

const usingArgs = build.subTask('all-tasks-subtask', function (gulp, buildConfig, done) {
    const isProd = buildConfig.args['isProd']
    if (isProd) {
        build.warn('Deploying to PROD...');
    } else {
        build.verbose('Deploying to DEV...');
    }
    done();
});
build.task('using-args', usingArgs);