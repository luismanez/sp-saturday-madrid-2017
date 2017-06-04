'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

//Pre-Demo - Gulp style
gulp.task('gulp-style', function() {
  console.log('Gulp style task!');
});

//01 - gulp first-task
require('./gulp_tasks/01-first-task.js');

//02 - gulp custom-config
require('./gulp_tasks/02-custom-config.js');

//03 - gulp tasks-serie
require('./gulp_tasks/03-tasks-serie.js');

//04 - gulp --target-cdn="https://my-cdn-url"
require('./gulp_tasks/04-post-build.js');

//05 - gulp after-bundle
require('./gulp_tasks/05-after-bundle.js');

//06
//gulp using-args --isProd --verbose
//gulp using-args --isProd=0 --verbose
//gulp using-args --isProd=0
require('./gulp_tasks/06-using-args.js');

//07 - gulp deploy-app-pkg --ship
// + First time you need to Deploy from AppCatalog manually (Ribbon - File - Deploy)
require('./gulp_tasks/07-deploy-app-pkg.js');

//08 - gulp deploy-cdn-assets --ship
require('./gulp_tasks/08-deploy-cdn-assets.js');

//09 - extending webpack: gulp serve
require('./gulp_tasks/09-extending-webpack.js');

//10 - Continuous Integration Build
//gulp ci-build --ship --username="<USER>@<TENANT>.onmicrosoft.com" --password="<PASSWORD>" --tenant-url="https://<TENANT>.sharepoint.com/" --site-relative-url="sites/<SITE>" --library-path="<CDN_LIBRARY>" --target-cdn="https://publiccdn.sharepointonline.com/<TENANT>.sharepoint.com/sites/<SITE>/<CDN_LIBRARY>"
require('./gulp_tasks/10-ci-build.js');

build.initialize(gulp);
