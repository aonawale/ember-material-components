import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import { gt } from '@ember/object/computed';
import { MDCSelect } from '@material/select';
import layout from '../templates/components/mdc-select';

export default MDCBase.extend({
  layout,
  mdcClass: MDCSelect,
  role: 'listbox',
  tabindex: 0,
  label: null,
  selectedIndex: -1,
  isDisabled: false,

  classNames: ['mdc-select'],
  attributeBindings: [
    'role',
    'isDisabled:aria-disabled'
  ],

  hasSelectedOption: gt('selectedIndex', -1).readOnly(),

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCSelect:change', get(this, 'change'));
  },

  updateElement(mdcComponent) {
    mdcComponent.selectedIndex = get(this, 'selectedIndex');
    mdcComponent.disabled = !!get(this, 'isDisabled');
  },

  change() {}
});
