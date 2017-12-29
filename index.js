/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const nodeModulesPath = require('node-modules-path');

module.exports = {
  name: 'ember-material-components',

  included: function(app) {
    this._super.included.apply(this, arguments);
    let nodeModules = nodeModulesPath(this.root);

    app.import(`${nodeModules}/@material/base/dist/mdc.base.js`);
    app.import(`${nodeModules}/@material/ripple/dist/mdc.ripple.js`);
    app.import(`${nodeModules}/@material/checkbox/dist/mdc.checkbox.js`);
    app.import(`${nodeModules}/@material/dialog/dist/mdc.dialog.js`);
    app.import(`${nodeModules}/@material/drawer/dist/mdc.drawer.js`);
    app.import(`${nodeModules}/@material/selection-control/dist/mdc.selectionControl.js`);
    app.import(`${nodeModules}/@material/toolbar/dist/mdc.toolbar.js`);
    app.import(`${nodeModules}/@material/icon-toggle/dist/mdc.iconToggle.js`);
    app.import(`${nodeModules}/@material/linear-progress/dist/mdc.linearProgress.js`);
    app.import(`${nodeModules}/@material/snackbar/dist/mdc.snackbar.js`);
    app.import(`${nodeModules}/@material/menu/dist/mdc.menu.js`);
    app.import(`${nodeModules}/@material/radio/dist/mdc.radio.js`);
    app.import(`${nodeModules}/@material/slider/dist/mdc.slider.js`);
    app.import(`${nodeModules}/@material/textfield/dist/mdc.textfield.js`);
    app.import(`${nodeModules}/@material/tabs/dist/mdc.tabs.js`);
    app.import(`${nodeModules}/@material/select/dist/mdc.select.js`);
    app.import(`${nodeModules}/@material/form-field/dist/mdc.formField.js`);
    app.import(`${nodeModules}/@material/grid-list/dist/mdc.gridList.js`);
  },

  treeForStyles: function treeForStyles(tree) {
    let app;
    let styleTrees = [];
    let current = this;
    let nodeModules = nodeModulesPath(this.root);
    let materialPath = '@material';

    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    if (app.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel(path.join(nodeModules, materialPath), {
        destDir: materialPath
      }));
    }

    tree && styleTrees.push(tree);

    return mergeTrees(styleTrees, { overwrite: true });
  }
};
