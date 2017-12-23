import Component from '@ember/component';
import layout from '../templates/components/mdc-grid-tile';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['mdc-grid-tile']
});
