import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/mdc-radio';

export default Component.extend({
  layout,
  name: null,
  value: null,
  isChecked: false,
  isDisabled: false,

  _mdcComponent: null,

  classNames: ['mdc-radio'],
  classNameBindings: [
    'isDisabled:mdc-radio--disabled'
  ],

  radioId: computed(function() {
    return `mdc-radio-${guidFor(this)}`;
  }),

  didInsertElement() {
    this._super(...arguments);
    let radio = new mdc.radio.MDCRadio(get(this, 'element'));

    set(this, '_mdcComponent', radio);
    this._updateElement();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this._updateElement();
  },

  _updateElement() {
    let radio = get(this, '_mdcComponent');
    radio.value = get(this, 'value');
    radio.checked = !!get(this, 'isChecked');
    radio.disabled = !!get(this, 'isDisabled');
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  }
});
