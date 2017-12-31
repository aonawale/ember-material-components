import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import { MDCSimpleMenu } from '@material/menu';
import layout from '../templates/components/mdc-menu';

export default MDCBase.extend({
  layout,
  mdcClass: MDCSimpleMenu,
  tabindex: '-1',
  isOpened: false,
  isOpenedFromTopLeft: false,
  isOpenedFromTopRight: false,
  isOpenedFromBottomLeft: false,
  isOpenedFromBottomRight: false,

  classNames: ['mdc-simple-menu'],
  classNameBindings: [
    'isOpenedFromTopLeft:mdc-simple-menu--open-from-top-left',
    'isOpenedFromTopRight:mdc-simple-menu--open-from-top-right',
    'isOpenedFromBottomLeft:mdc-simple-menu--open-from-bottom-left',
    'isOpenedFromBottomRight:mdc-simple-menu--open-from-bottom-right'
  ],
  attributeBindings: ['tabindex'],

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCSimpleMenu:cancel', get(this, 'cancel'));
    mdcComponent.listen('MDCSimpleMenu:selected', get(this, 'select'));
  },

  updateElement(mdcComponent) {
    mdcComponent.open = !!get(this, 'isOpened');
  },

  cancel() {},
  select() {}
});
