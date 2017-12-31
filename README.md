# ember-material-components

Google's [Material Design Components](https://material-components-web.appspot.com/) for Ember JS apps

## Installation
```sh
ember install ember-material-components
```

### With SASS
Install [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) addon by running the following command:

```sh
ember install ember-cli-sass
```

**app/styles/app.scss**
```scss
@import "ember-material-components";
```

### Without SASS
This addon can be used without SASS (relying on pure CSS for styles). If you choose this path, you'll need to manually include all CSS files for each material web components by adding the following lines to your `ember-cli-build.js` file.

```js
app.import('node_modules/@material/button/dist/mdc.button.css');
app.import('node_modules/@material/card/dist/mdc.card.css');
app.import('node_modules/@material/checkbox/dist/mdc.checkbox.css');
app.import('node_modules/@material/dialog/dist/mdc.dialog.css');
app.import('node_modules/@material/drawer/dist/mdc.drawer.css');
app.import('node_modules/@material/elevation/dist/mdc.elevation.css');
app.import('node_modules/@material/fab/dist/mdc.fab.css');
app.import('node_modules/@material/form-field/dist/mdc.form-field.css');
app.import('node_modules/@material/grid-list/dist/mdc.grid-list.css');
app.import('node_modules/@material/icon-toggle/dist/mdc.icon-toggle.css');
app.import('node_modules/@material/layout-grid/dist/mdc.layout-grid.css');
app.import('node_modules/@material/linear-progress/dist/mdc.linear-progress.css');
app.import('node_modules/@material/list/dist/mdc.list.css');
app.import('node_modules/@material/menu/dist/mdc.menu.css');
app.import('node_modules/@material/radio/dist/mdc.radio.css');
app.import('node_modules/@material/ripple/dist/mdc.ripple.css');
app.import('node_modules/@material/select/dist/mdc.select.css');
app.import('node_modules/@material/slider/dist/mdc.slider.css');
app.import('node_modules/@material/snackbar/dist/mdc.snackbar.css');
app.import('node_modules/@material/switch/dist/mdc.switch.css');
app.import('node_modules/@material/tabs/dist/mdc.tabs.css');
app.import('node_modules/@material/textfield/dist/mdc.textfield.css');
app.import('node_modules/@material/theme/dist/mdc.theme.css');
app.import('node_modules/@material/toolbar/dist/mdc.toolbar.css');
app.import('node_modules/@material/typography/dist/mdc.typography.css');
```
> **Note:** If you are using ember-cli >= 2.15, you can import files directly from your `node_modules` directory otherwise you'll have to use third party tools like [ember-cli-node-assets](https://github.com/dfreeman/ember-cli-node-assets) or [ember-cli-node-modules-to-vendor](https://github.com/kellyselden/ember-cli-node-modules-to-vendor).

## Configuration

### Theme Colors
MDC Theme makes it easy to develop your brand colors. You override the default theme color through Sass variables or CSS custom properties.

> **A note about Sass variables**, you need to define the three theme color variables before importing ember-material-components, like following:

```scss
$mdc-theme-primary: #9c27b0; // Purple 500
$mdc-theme-secondary: #ffab40; // Orange A200
$mdc-theme-background: #fff; // White

@import "ember-material-components";
```

For CSS and more advance theming customization visit the [official mdc-theme documentation](https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme/README.md#change-theme-colors).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
