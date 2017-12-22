import Component from '@ember/component';
import layout from '../templates/components/mdc-permanent-drawer';

export default Component.extend({
  layout,
  tagName: 'nav',
  hasSpacer: true,
  classNames: ['mdc-permanent-drawer', 'mdc-typography']
});
