# ember-material-components

Google's [Material Design Components](https://material.io/components/web/) for Ember JS apps

## Installation
```sh
ember install ember-material-components
```

### Using SASS
Install [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) addon by running the following command:

```sh
ember install ember-cli-sass
```

**app/styles/app.scss**
```scss
@import "ember-material-components";
```

## Configuration

### Theme Colors
Material Design Component Theme makes it easy to develop your brand colors. You override the default theme color through Sass variables or CSS custom properties.

> **A note about Sass variables**, you need to define the three theme color variables before importing ember-material-components, like following:

#### With SASS
```scss
$mdc-theme-primary: #9c27b0; // Purple 500
$mdc-theme-secondary: #ffab40; // Orange A200
$mdc-theme-background: #fff; // White

@import "ember-material-components";
```

#### Without SASS
```css
:root {
  --mdc-theme-primary: #ce93d8; // Purple 500
  --mdc-theme-secondary: #6a1b9a; // Orange A200
  --mdc-theme-background: #fff; // White
}
```

For more advance theming customization refer to the [official mdc-theme documentation](https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme/README.md#change-theme-colors).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
