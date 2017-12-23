import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import layout from '../templates/components/mdc-tab-bar';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.tabs.MDCTabBar,
  tagName: 'nav',
  activeTab: null,
  activeTabIndex: 0,
  isIconTabBar: false,
  isIconTabBarWithText: false,
  classNames: ['mdc-tab-bar'],
  classNameBindings: [
    'isIconTabBar:mdc-tab-bar--icon-tab-bar',
    'isIconTabBarWithText:mdc-tab-bar--icons-with-text'
  ],

  didInsertElement() {
    this._super(...arguments);
    let tabBar = get(this, '_mdcComponent');
    tabBar && tabBar.listen('MDCTabBar:change', get(this, 'change'));
  },

  didUpdate() {
    this._super(...arguments);
    let tabBar = get(this, '_mdcComponent');
    tabBar && tabBar.listen('MDCTabBar:change', get(this, 'change'));
  },

  updateElement(mdcComponent) {
    let activeTab = get(this, 'activeTab');
    if (activeTab) {
      mdcComponent.activeTab = activeTab;
    }
    mdcComponent.activeTabIndex = get(this, 'activeTabIndex');
  },

  change() {}
});
