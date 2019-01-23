'use strict';

const path = require('path');
const fastbootTransform = require('fastboot-transform');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const resolve = require('resolve');

module.exports = {
  name: require('./package').name,

  included: function() {
    this._super.included.apply(this, arguments);
    this._ensureFindHost();

    let vendorPath = `vendor/${this.name}`;
    let host = this._findHost();

    host.import({
      development: path.join(vendorPath, 'slick.js'),
      production: path.join(vendorPath, 'slick.min.js'),
    });
  },

  treeForVendor() {
    let slickPath = path.join(this.resolvePackagePath('slick-carousel'), 'slick');
    let slickJs = fastbootTransform(new Funnel(slickPath, {
      files: ['slick.js', 'slick.min.js'],
      destDir: this.name
    }));

    return mergeTrees([slickJs]);
  },

  treeForPublic() {
    let slickPath = path.join(this.resolvePackagePath('slick-carousel'), 'slick');
    const imagesDir = new Funnel(slickPath, {
      include: ['*.gif'],
      destDir: 'assets'
    });

    const fontsDir = new Funnel(path.join(slickPath, 'fonts'), {
      include: ['*.ttf', '*.svg', '*.eot', '*.woff'],
      destDir: 'assets/fonts'
    });

    return mergeTrees([imagesDir, fontsDir]);
  },

  treeForStyles(tree) {
    let styleTrees = [];
    let host = this._findHost();

    if (host.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel(path.join(this.resolvePackagePath('slick-carousel'), 'slick'), {
        include: ['**/*.scss'],
        destDir: this.name
      }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  },

  resolvePackagePath(packageName) {
    let host = this._findHost();
    return path.dirname(resolve.sync(`${packageName}/package.json`, { basedir: host.project.root }));
  },

  _ensureFindHost() {
    if (!this._findHost) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        return app;
      };
    }
  }
};
