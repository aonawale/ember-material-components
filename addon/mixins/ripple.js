import Mixin from '@ember/object/mixin';
import { get, set } from '@ember/object';

export default Mixin.create({
  hasRipples: true,
  classNameBindings: ['hasRipples:mdc-ripple-surface'],

  _mdcRippleComponent: null,

  didInsertElement() {
    this._super(...arguments);
    if (get(this, 'hasRipples')) {
      set(this, '_mdcRipple', mdc.ripple.MDCRipple.attachTo(this.element));
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    let ripple = get(this, '_mdcRipple');
    ripple && ripple.destroy();
  }
});
