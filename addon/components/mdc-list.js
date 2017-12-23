import Component from '@ember/component';
import layout from '../templates/components/mdc-list';

export default Component.extend({
  layout,
  tagName: 'ul',
  role: null,
  ariaHidden: null,
  isDense: false,
  isInteractive: true,
  isAvaterList: false,
  isTwoLineListItem: false,
  classNames: ['mdc-list'],
  classNameBindings: [
    'isDense:mdc-list--dense',
    'isInteractive::mdc-list--non-interactive',
    'isTwoLineListItem:mdc-list--two-line',
    'isAvaterList:mdc-list--avatar-list'
  ],
  attributeBindings: ['role', 'ariaHidden:aria-hidden']
});
