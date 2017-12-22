import Component from '@ember/component';
import layout from '../templates/components/mdc-icon';

export default Component.extend({
  layout,
  icon: null,
  tagName: 'i',
  'aria-hidden': null,
  classNames: ['material-icons'],
  attributeBindings: ['aria-hidden']
}).reopenClass({
  positionalParams: ['icon']
});
