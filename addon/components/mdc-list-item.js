import Ripple from '../mixins/ripple';
import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/mdc-list-item';

export default Component.extend(Ripple, {
  layout,
  tagName: 'li',
  role: null,
  isDisabled: false,
  hasRipples: false,
  isSelected: false,
  isActivated: false,
  classNames: ['mdc-list-item'],
  classNameBindings: [
    'isSelected:mdc-list-item--selected',
    'isActivated:mdc-list-item--activated'
  ],
  attributeBindings: [
    'role',
    'tabindex',
    'ariaDisabled:aria-disabled',
    'ariaSelected:aria-selected'
  ],

  tabindex: computed('isDisabled', function() {
    return get(this, 'isDisabled') ? '-1' : '0';
  }),

  ariaDisabled: computed('isDisabled', function() {
    return get(this, 'isDisabled') ? 'true' : 'false';
  }),

  ariaSelected: computed.oneWay('isSelected')
});
