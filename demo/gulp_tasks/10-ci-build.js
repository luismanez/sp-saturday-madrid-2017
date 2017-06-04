const build = require('@microsoft/sp-build-web');

var deployCdnAssets = require('./08-deploy-cdn-assets.js');
var deployAppPkg = require('./07-deploy-app-pkg.js');

build.task('ci-build', build.serial([deployCdnAssets.Task, deployAppPkg.Task]));
