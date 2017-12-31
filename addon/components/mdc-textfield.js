import MDCBase from './-mdc-base';
import { get, computed } from '@ember/object';
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { bool, not, and } from '@ember/object/computed';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/mdc-textfield';

export default MDCBase.extend({
  layout,
  mdcClass: MDCTextField,
  icon: null,
  label: null,
  value: null,
  placeholder: null,
  minLength: null,
  isValid: true,
  isDense: false,
  isFocused: false,
  isDisabled: false,
  isOutlined: false,
  isRequired: false,
  isFullWidth: false,
  ariaLabel: null,
  ariaControls: null,
  isTrailingIcon: false,
  iconTabindex: '0',

  classNames: ['mdc-text-field'],
  classNameBindings: [
    'isDense:mdc-text-field--dense',
    'isFocused:mdc-text-field--focused',
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

  updateElement(mdcComponent) {
    mdcComponent.ripple = null;

    if (get(this, 'isBoxed')) {
      mdcComponent.ripple = new MDCRipple(get(this, 'element'));
    }
    if (get(this, 'isOutlined')) {
      mdcComponent.ripple = new MDCRipple(document.querySelector('.mdc-text-field__outline'));
    }

    mdcComponent.valid = !!get(this, 'isValid');
    mdcComponent.disabled = !!get(this, 'isDisabled');
  }
});
