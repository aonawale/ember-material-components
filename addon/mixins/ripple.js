import Mixin from '@ember/object/mixin';
import { get, set } from '@ember/object';

export default Mixin.create({
  hasRipples: true,
  classNameBindings: ['hasRipples:mdc-ripple-surface'],

  _mdcRipple: null,

  didInsertElement() {
    this._super(...arguments);
    if (get(this, 'hasRipples')) {
      let ripple = new mdc.ripple.MDCRipple(get(this, 'element'));
      set(this, '_mdcRipple', ripple);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    let ripple = get(this, '_mdcRipple');
    ripple && ripple.destroy();
  }
});
