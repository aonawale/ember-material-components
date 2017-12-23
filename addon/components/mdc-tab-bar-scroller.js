import MDCBase from './-mdc-base';
import layout from '../templates/components/mdc-tab-bar-scroller';

export default MDCBase.extend({
  layout,
  nextIcon: 'navigate_next',
  prevIcon: 'navigate_before',
  mdcClass: mdc.tabs.MDCTabBarScroller,
  classNames: ['mdc-tab-bar-scroller'],
  classNameBindings: [
    'isActive:mdc-tab--active',
    'isIconTabWithText:mdc-tab--with-icon-and-text'
  ]
});
