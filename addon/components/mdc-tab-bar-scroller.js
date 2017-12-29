import MDCBase from './-mdc-base';
import layout from '../templates/components/mdc-tab-bar-scroller';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.tabs.MDCTabBarScroller,
  nextIcon: 'navigate_next',
  prevIcon: 'navigate_before',
  classNames: ['mdc-tab-bar-scroller'],
  classNameBindings: [
    'isActive:mdc-tab--active',
    'isIconTabWithText:mdc-tab--with-icon-and-text'
  ]
});
