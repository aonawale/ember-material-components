import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import layout from '../templates/components/mdc-form-field';

export default MDCBase.extend({
  layout,
  input: null,
  mdcClass: mdc.formField.MDCFormField,

  classNames: ['mdc-form-field'],

  updateElement(mdcComponent) {
    mdcComponent.input = get(this, 'input');
  }
});
