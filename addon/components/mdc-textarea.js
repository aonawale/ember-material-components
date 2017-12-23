import MDCTextField from './mdc-textfield';
import layout from '../templates/components/mdc-textarea';

export default MDCTextField.extend({
  layout,
  rows: 8,
  cols: 40,
  classNames: ['mdc-text-field--textarea'],
});
