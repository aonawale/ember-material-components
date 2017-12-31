import MDCBase from './-mdc-base';
import { MDCSnackbar } from '@material/snackbar';
import layout from '../templates/components/mdc-snackbar';
import { get, getProperties, computed } from '@ember/object';

export default MDCBase.extend({
  layout,
  mdcClass: MDCSnackbar,
  message: null,
  timeout: 2750,
  isShown: true,
  multiline: false,
  actionText: null,
  actionHandler: null,
  actionOnBottom: false,
  dismissesOnAction: true,
  ariaLive: 'assertive',
  ariaAtomic: 'true',
  ariaHidden: 'true',
  isStartAligned: false,

  classNames: ['mdc-snackbar'],
  classNameBindings: [
    'isStartAligned:mdc-snackbar--align-start'
  ],
  attributeBindings: [
    'ariaLive:aria-live',
    'ariaAtomic:aria-atomic',
    'ariaHidden:aria-hidden'
  ],

  dataObj: computed('message', 'timeout', 'multiline', 'actionText', 'actionHandler', 'actionOnBottom', function() {
    return getProperties(this, 'message', 'timeout', 'multiline', 'actionText', 'actionHandler', 'actionOnBottom');
  }),

  didInsertElement() {
    this._super(...arguments);
    let snackbar = get(this, '_mdcComponent');

    if (get(this, 'isShown')) {
      snackbar.show(get(this, 'dataObj'));
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let snackbar = get(this, '_mdcComponent');

    if (get(this, 'isShown')) {
      snackbar.show(get(this, 'dataObj'));
    }
  },

  updateElement(mdcComponent) {
    mdcComponent.dismissesOnAction = !!get(this, 'dismissesOnAction');
  },

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCSnackbar:show', get(this, 'show'));
    mdcComponent.listen('MDCSnackbar:hide', get(this, 'hide'));
  },

  show() {},
  hide() {}
});
