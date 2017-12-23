import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { bool, not, and } from '@ember/object/computed';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/mdc-textfield';

export default Component.extend({
  layout,
  icon: null,
  trailingIcon: null,
  label: null,
  value: null,
  placeholder: null,
  minLength: null,
  isValid: true,
  isDisabled: false,
  isOutlined: false,
  isRequired: false,
  isInvalid: false,
  isFullWidth: false,
  ariaLabel: null,
  ariaControls: null,
  isTrailingIcon: false,
  iconTabindex: '0',

  _mdcComponent: null,

  classNames: ['mdc-text-field'],
  classNameBindings: [
    'isDisabled:mdc-text-field--disabled',
    'isOutlined:mdc-text-field--outlined',
    'isFullWidth:mdc-text-field--fullwidth',
    'isBoxed:mdc-text-field--box',
    'hasLeadingIcon:mdc-text-field--with-leading-icon',
    'hasTrailingIcon:mdc-text-field--with-trailing-icon'
  ],

  isBoxed: bool('hasIcon'),
  hasIcon: bool('icon').readOnly(),
  isLeadingIcon: not('isTrailingIcon').readOnly(),
  hasLeadingIcon: and('hasIcon', 'isLeadingIcon').readOnly(),
  hasTrailingIcon: and('hasIcon', 'isTrailingIcon').readOnly(),

  inputId: computed(function() {
    return `mdc-switch-${guidFor(this)}`;
  }),

  didInsertElement() {
    this._super(...arguments);
    let textfield = new mdc.textfield.MDCTextField(get(this, 'element'));
    set(this, '_mdcComponent', textfield);
    this._updateElement();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this._updateElement();
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  },

  _updateElement() {
    let textfield = get(this, '_mdcComponent');
    textfield.valid = get(this, 'isValid');
    textfield.disabled = get(this, 'isDisabled');
  }
});
