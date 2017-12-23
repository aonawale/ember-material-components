import MDCBase from './-mdc-base';
import layout from '../templates/components/mdc-snackbar';
import { get, getProperties, computed } from '@ember/object';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.snackbar.MDCSnackbar,
  message: null,
  timeout: 2750,
  isShowing: true,
  isMultiline: false,
  actionText: null,
  actionHandler: null,
  actionOnBottom: false,
  dismissesOnAction: true,
  ariaLive: 'assertive',
  ariaAtomic: 'true',
  ariaHidden: 'true',
  isStartAligned: false,

  _mdcComponent: null,

  classNames: ['mdc-snackbar'],
  classNameBindings: [
    'isStartAligned:mdc-snackbar--align-start'
  ],
  attributeBindings: [
    'ariaLive:aria-live',
    'ariaAtomic:aria-atomic',
    'ariaHidden:aria-hidden'
  ],

  dataObj: computed('message', 'timeout', 'isMultiline', 'actionText', 'actionHandler', 'actionOnBottom', function() {
    return getProperties(this, 'message', 'timeout', 'isMultiline', 'actionText', 'actionHandler', 'actionOnBottom');
  }),

  didInsertElement() {
    this._super(...arguments);
    let snackbar = get(this, '_mdcComponent');

    if (get(this, 'isShowing')) {
      snackbar.show(get(this, 'dataObj'));
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let snackbar = get(this, '_mdcComponent');

    if (get(this, 'isShowing')) {
      snackbar.show(get(this, 'dataObj'));
    }
  },

  updateElement(mdcComponent) {
    mdcComponent.dismissesOnAction = get(this, 'dismissesOnAction');
  },

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCSnackbar:show', get(this, 'show'));
    mdcComponent.listen('MDCSnackbar:hide', get(this, 'hide'));
  },

  show() {},
  hide() {}
});
