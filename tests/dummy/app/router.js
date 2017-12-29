import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('button');
  this.route('card');
  this.route('checkbox');
  this.route('select');
  this.route('tabs');
  this.route('list');
  this.route('radio');
  this.route('slider');
  this.route('linear-progress');
  this.route('textfield');
  this.route('form-field');
  this.route('snackbar');
  this.route('dialog');
  this.route('menu');
  this.route('fab');
  this.route('icon-toggle');
  this.route('grid-list');
  this.route('drawer');
  this.route('toolbar');
  this.route('switch');
});

export default Router;
