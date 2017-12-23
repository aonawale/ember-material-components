import Component from '@ember/component';
import layout from '../templates/components/mdc-icon';

export default Component.extend({
  layout,
  icon: null,
  tagName: 'i',
  tabindex: null,
  ariaHidden: null,
  ariaLabel: null,
  classNames: ['material-icons'],
  attributeBindings: [
    'tabindex',
    'ariaHidden:aria-hidden',
    'ariaLabel:aria-label'
  ]
}).reopenClass({
  positionalParams: ['icon']
});
