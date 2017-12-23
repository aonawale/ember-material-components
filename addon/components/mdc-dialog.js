import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import { reads } from '@ember/object/computed';
import layout from '../templates/components/mdc-dialog';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.dialog.MDCDialog,
  role: null,
  ariaLabelledby: null,
  ariaDescribedby: null,
  isShowing: true,
  tagName: 'aside',
  classNames: ['mdc-dialog'],
  attributeBindings: [
    'role',
    'ariaLabelledby:aria-labelledby',
    'ariaDescribedby:aria-describedby'
  ],

  didInsertElement() {
    this._super(...arguments);
    if (get(this, 'isShowing')) {
      get(this, '_mdcComponent').show();
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let dialog = get(this, '_mdcComponent');

    if (get(this, 'isShowing')) {
      dialog.show();
    } else {
      dialog.close();
    }
  },

  accept() {},
  cancel() {},
  'click-backdrop': reads('cancel')
});
