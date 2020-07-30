'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapCSS': true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/custom.js');
  app.import('vendor/scripts.js');
  app.import('vendor/stisla.js');
  app.import('vendor/page/index.js');
  app.import('node_modules/jquery-sparkline/jquery.sparkline.min.js');
  app.import('node_modules/owl.carousel/dist/owl.carousel.min.js');
  app.import('node_modules/summernote/dist/summernote-bs4.min.js');
  app.import('node_modules/summernote/dist/summernote-bs4.min.css');
  app.import('node_modules/chocolat/dist/js/chocolat.js');
  app.import('node_modules/chocolat/dist/css/chocolat.css');


  return app.toTree();
};
