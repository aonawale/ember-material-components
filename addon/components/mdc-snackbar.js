import Component from '@ember/component';
import layout from '../templates/components/mdc-snackbar';
import { get, set, getProperties, computed } from '@ember/object';

export default Component.extend({
  layout,
  message: null,
  timeout: 2750,
  isShowing: true,
  isMultiline: false,
  actionText: null,
  actionHandler: null,
  actionOnBottom: false,
  dismissesOnAction: true,
  'aria-live': 'assertive',
  'aria-atomic': 'true',
  'aria-hidden': 'true',
  isStartAligned: false,

  _mdcComponent: null,

  classNames: ['mdc-snackbar'],
  classNameBindings: [
    'isStartAligned:mdc-snackbar--align-start'
  ],
  attributeBindings: ['aria-live', 'aria-atomic', 'aria-hidden'],

  dataObj: computed('message', 'timeout', 'isMultiline', 'actionText', 'actionHandler', 'actionOnBottom', function() {
    return getProperties(this, 'message', 'timeout', 'isMultiline', 'actionText', 'actionHandler', 'actionOnBottom');
  }),

  didInsertElement() {
    this._super(...arguments);
    let snackbar = new mdc.snackbar.MDCSnackbar(get(this, 'element'));
    snackbar.dismissesOnAction = get(this, 'dismissesOnAction');

    snackbar.listen('MDCSnackbar:show', get(this, 'show'));
    snackbar.listen('MDCSnackbar:hide', get(this, 'hide'));

    if (get(this, 'isShowing')) {
      snackbar.show(get(this, 'dataObj'));
    }

    set(this, '_mdcComponent', snackbar);
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let snackbar = get(this, '_mdcComponent');

    if (get(this, 'isShowing')) {
      snackbar.show(get(this, 'dataObj'));
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  },

  show() {},
  hide() {}
});
