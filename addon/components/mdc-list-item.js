import Ripple from '../mixins/ripple';
import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/mdc-list-item';

export default Component.extend(Ripple, {
  layout,
  tagName: 'li',
  role: null,
  isDisabled: null,
  hasRipples: null,
  isSelected: null,
  isActivated: null,
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
    let isDisabled = get(this, 'isDisabled');
    if (isDisabled === true) {
      return '-1';
    } else if (isDisabled === false) {
      return '0';
    }
  }),

  ariaDisabled: computed('isDisabled', function() {
    let isDisabled = get(this, 'isDisabled');
    if (isDisabled === true) {
      return 'true';
    } else if (isDisabled === false) {
      return 'false';
    }
  }),

  ariaSelected: computed.oneWay('isSelected')
});
