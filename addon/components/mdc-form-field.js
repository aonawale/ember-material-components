import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import { MDCFormField } from '@material/form-field';
import layout from '../templates/components/mdc-form-field';

export default MDCBase.extend({
  layout,
  input: null,
  isEndAligned: false,
  mdcClass: MDCFormField,

  classNames: ['mdc-form-field'],
  classNameBindings: ['isEndAligned:mdc-form-field--align-end'],

  updateElement(mdcComponent) {
    mdcComponent.input = get(this, 'input');
  }
});
