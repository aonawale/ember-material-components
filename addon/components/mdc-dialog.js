import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import { MDCDialog } from '@material/dialog';
import { reads } from '@ember/object/computed';
import layout from '../templates/components/mdc-dialog';

export default MDCBase.extend({
  layout,
  mdcClass: MDCDialog,
  role: 'alertdialog',
  ariaLabelledby: null,
  ariaDescribedby: null,
  isShown: true,
  tagName: 'aside',
  classNames: ['mdc-dialog'],
  attributeBindings: [
    'role',
    'ariaLabelledby:aria-labelledby',
    'ariaDescribedby:aria-describedby'
  ],

  didInsertElement() {
    this._super(...arguments);
    if (get(this, 'isShown')) {
      get(this, '_mdcComponent').show();
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let dialog = get(this, '_mdcComponent');

    if (get(this, 'isShown')) {
      dialog.show();
    } else {
      dialog.close();
    }
  },

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCDialog:accept', get(this, 'accept'));
    mdcComponent.listen('MDCDialog:cancel', get(this, 'cancel'));
  },

  accept() {},
  cancel() {},
  'click-backdrop': reads('cancel')
});
