import MDCBase from './-mdc-base';
import { MDCCheckbox } from '@material/checkbox';
import { computed, get } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/mdc-checkbox';

export default MDCBase.extend({
  layout,
  mdcClass: MDCCheckbox,
  value: null,
  isChecked: false,
  isDisabled: false,
  isIndeterminate: false,
  classNames: ['mdc-checkbox'],
  classNameBindings: ['isDisabled:mdc-checkbox--disabled'],

  inputId: computed(function() {
    return `mdc-checkbox-${guidFor(this)}`;
  }),

  updateElement(mdcComponent) {
    mdcComponent.value = get(this, 'value');
    mdcComponent.checked = !!get(this, 'isChecked');
    mdcComponent.disabled = !!get(this, 'isDisabled');
    mdcComponent.indeterminate = !!get(this, 'isIndeterminate');
  }
});
