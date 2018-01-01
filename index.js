/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const materialPackages = [
  { name: '@material/animation', css: true, js: true },
  { name: '@material/base', css: false, js: true },
  { name: '@material/button', css: true, js: false },
  { name: '@material/card', css: true, js: false },
  { name: '@material/checkbox', css: true, js: true },
  { name: '@material/dialog', css: true, js: true },
  { name: '@material/drawer', css: true, js: true },
  { name: '@material/elevation', css: true, js: false },
  { name: '@material/fab', css: true, js: false },
  { name: '@material/form-field', css: true, js: true },
  { name: '@material/grid-list', css: true, js: true },
  { name: '@material/icon-toggle', css: true, js: true },
  { name: '@material/layout-grid', css: true, js: false },
  { name: '@material/linear-progress', css: true, js: true },
  { name: '@material/list', css: true, js: false },
  { name: '@material/menu', css: true, js: true },
  { name: '@material/radio', css: true, js: true },
  { name: '@material/ripple', css: true, js: true },
  { name: '@material/rtl', css: false, js: false },
  { name: '@material/select', css: true, js: true },
  { name: '@material/selection-control', css: false, js: true },
  { name: '@material/slider', css: true, js: true },
  { name: '@material/snackbar', css: true, js: true },
  { name: '@material/switch', css: true, js: false },
  { name: '@material/tabs', css: true, js: true },
  { name: '@material/textfield', css: true, js: true },
  { name: '@material/theme', css: true, js: false },
  { name: '@material/toolbar', css: true, js: true },
  { name: '@material/typography', css: true, js: false }
];

module.exports = {
  name: 'ember-material-components',

  included: function(app) {
    this._super.included.apply(this, arguments);

    materialPackages.forEach(function(pkg) {
      let pkgBaseName = pkg.name.replace('@material/', '');
      if (pkg.js) {
        app.import({
          development: `vendor/ember-material-components/dist/mdc.${camelize(pkgBaseName)}.js`,
          production: `vendor/ember-material-components/dist/mdc.${camelize(pkgBaseName)}.min.js`
        }, { using: [{ transformation: 'amd', as: pkg.name }] });
      }
      if (pkg.css && !app.project.findAddonByName('ember-cli-sass')) {
        app.import({
          development: `vendor/ember-material-components/dist/mdc.${pkgBaseName}.css`,
          production: `vendor/ember-material-components/dist/mdc.${pkgBaseName}.min.css`,
        });
      }
    });
  },

  treeForVendor: function () {
    let trees = materialPackages.map(function(pkg) {
      let include = [];
      if (pkg.css) {
        include.push('dist/mdc.*.css');
      }
      if (pkg.js) {
        include.push('dist/mdc.*.js');
      }
      return new Funnel(`node_modules/${pkg.name}`, { destDir: 'ember-material-components', include: include });
    });

    return this._super(mergeTrees(trees, { overwrite: true }));
  },

  treeForStyles: function(tree) {
    let app;
    let trees = [];
    let current = this;

    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    if (app.project.findAddonByName('ember-cli-sass')) {
      trees.push(new Funnel(`node_modules/@material`, { destDir: '@material', include: ['**/*.{scss,sass}'] }));
    }

    tree && trees.push(tree);

    return mergeTrees(trees, { overwrite: true });
  }
};

/*!
 * The camelize function and its RegExps are under the MIT License
 * Copyright (c) 2016 Yehuda Katz, Tom Dale and Ember.js contributors
 * https://github.com/emberjs/ember.js/blob/v2.10.0/packages/ember-runtime/lib/system/string.js#L25-L29
 */
const STRING_CAMELIZE_REGEXP_1 = (/(\-|\_|\.|\s)+(.)?/g);
const STRING_CAMELIZE_REGEXP_2 = (/(^|\/)([A-Z])/g);

function camelize(word) {
  return word.replace(STRING_CAMELIZE_REGEXP_1, function (match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(STRING_CAMELIZE_REGEXP_2, function (match) {
    return match.toLowerCase();
  });
}
