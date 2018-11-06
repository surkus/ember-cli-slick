'use strict';

const path = require('path');
const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-slick',

  included: function(app) {
    this._super.included.apply(this, arguments);
    let importOptions = {
      using: [{
        transformation: 'fastbootTransform'
      }]
    };

    this._importJs(app, importOptions);
    this._importCss(app);
    this._importFonts(app);
    this._importImages(app);
  },

  _importJs(app, importOptions) {
    let jsPath = path.join('node_modules', 'slick-carousel', 'slick', 'slick.js');

    app.import(jsPath, importOptions);
  },

  _importCss(app) {
    const css = ['slick.css', 'slick-theme.css'];

    css.forEach(function(file) {
      let libPath = path.join('node_modules', 'slick-carousel', 'slick', file);
      app.import(libPath)
    })
  },

  _importFonts(app) {
    const fonts = ['slick.ttf', 'slick.svg', 'slick.eot', 'slick.woff'];

    fonts.forEach(function(file) {
      let libPath = path.join('node_modules', 'slick-carousel', 'slick', 'fonts', file);
      app.import(libPath, { destDir: 'assets/fonts' })
    })
  },

  _importImages(app) {
    let libPath = path.join('node_modules', 'slick-carousel', 'slick', 'ajax-loader.gif');

    app.import(libPath, { destDir: 'assets' });
  },

  importTransforms: function () {
    return {
      fastbootTransform: fastbootTransform
    }
  }
};
