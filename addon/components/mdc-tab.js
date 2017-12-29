import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import layout from '../templates/components/mdc-tab';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.tabs.MDCTab,
  tagName: 'a',
  isActive: false,
  isIconTabWithText: false,
  preventDefaultOnClick: true,
  classNames: ['mdc-tab'],
  classNameBindings: [
    'isActive:mdc-tab--active',
    'isIconTabWithText:mdc-tab--with-icon-and-text'
  ],
  attributeBindings: ['href'],

  didUpdate() {
    this._super(...arguments);
    let tab = get(this, '_mdcComponent');
    tab && this.bindListeners(tab)
  },

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCTab:selected', get(this, 'selected'));
  },

  updateElement(mdcComponent) {
    mdcComponent.isActive = !!get(this, 'isActive');
    mdcComponent.preventDefaultOnClick = !!get(this, 'preventDefaultOnClick');
  },

  selected() {}
});
