import Ripple from '../mixins/ripple';
import Component from '@ember/component';
import layout from '../templates/components/mdc-list-item';

export default Component.extend(Ripple, {
  layout,
  tagName: 'li',
  role: null,
  tabindex: null,
  'aria-disabled': null,
  hasRipples: false,
  isSelected: false,
  isActivated: false,
  classNames: ['mdc-list-item'],
  classNameBindings: [
    'isSelected:mdc-list-item--selected',
    'isActivated:mdc-list-item--activated'
  ],
  attributeBindings: ['role', 'tabindex', 'aria-disabled']
});
