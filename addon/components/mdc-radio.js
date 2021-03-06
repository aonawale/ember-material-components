import MDCBase from './-mdc-base';
import { MDCRadio } from '@material/radio';
import { get, computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/mdc-radio';

export default MDCBase.extend({
  layout,
  mdcClass: MDCRadio,
  name: null,
  value: null,
  isChecked: false,
  isDisabled: false,

  classNames: ['mdc-radio'],
  classNameBindings: [
    'isDisabled:mdc-radio--disabled'
  ],

  inputId: computed(function() {
    return `mdc-radio-${guidFor(this)}`;
  }),

  updateElement(mdcComponent) {
    mdcComponent.value = get(this, 'value');
    mdcComponent.checked = !!get(this, 'isChecked');
    mdcComponent.disabled = !!get(this, 'isDisabled');
  }
});
