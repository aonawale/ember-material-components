import MDCIcon from './mdc-icon';
import { next } from '@ember/runloop';
import { get, set, computed } from '@ember/object';

export default MDCIcon.extend({
  label: null,
  cssClass: null,
  offCssClass: null,
  offLabel: null,
  offIcon: null,
  role: 'button',
  'aria-label': false,
  'aria-disabled': false,
  'aria-pressed': false,
  tabindex: 0,
  isDisabled: false,

  _mdcComponent: null,

  classNames: ['mdc-icon-toggle'],
  classNameBindings: ['isDisabled:mdc-icon-toggle--disabled'],
  attributeBindings: [
    'role',
    'aria-pressed',
    'aria-label',
    'aria-disabled',
    'tabindex',
    'data-toggle-on',
    'data-toggle-off'
  ],

  'data-toggle-on': computed('label', 'icon', 'cssClass', function() {
    return JSON.stringify({
      label: get(this, 'label'),
      content: get(this, 'icon'),
      cssClass: get(this, 'cssClass'),
    });
  }),

  'data-toggle-off': computed('offLabel', 'offIcon', 'offCssClass', function() {
    return JSON.stringify({
      label: get(this, 'offLabel'),
      content: get(this, 'offIcon'),
      cssClass: get(this, 'offCssClass'),
    });
  }),

  didInsertElement() {
    this._super(...arguments);
    let iconToggle = new mdc.iconToggle.MDCIconToggle(get(this, 'element'));
    set(this, '_mdcComponent', iconToggle);
    iconToggle.listen('MDCToolbar:change', get(this, 'change'));
  },

  didUpdateAttrs() {
    this._super(...arguments);
    next(() => {
      let iconToggle = get(this, '_mdcComponent');
      iconToggle.refreshToggleData();
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  },

  change() {}
});
