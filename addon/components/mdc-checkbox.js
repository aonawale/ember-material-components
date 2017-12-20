import Component from '@ember/component';
import { computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/mdc-checkbox';

export default Component.extend({
  layout,
  checked: false,
  disabled: false,
  classNames: ['mdc-checkbox'],
  classNameBindings: ['disabled:mdc-checkbox--disabled'],

  checkboxId: computed(function() {
    return `mdc-checkbox-${guidFor(this)}`;
  })
});
