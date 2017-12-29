import Component from '@ember/component';
import { computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/mdc-switch';

export default Component.extend({
  layout,
  isOn: false,
  isDisabled: false,
  classNames: ['mdc-switch'],
  classNameBindings: [
    'isDisabled:mdc-switch--disabled'
  ],

  inputId: computed(function() {
    return `mdc-switch-${guidFor(this)}`;
  })
});
