import Component from '@ember/component';
import { get, set } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Component.extend({
  mdcClass: null,
  _mdcComponent: null,

  didInsertElement() {
    this._super(...arguments);
    let MDCClass = get(this, 'mdcClass');
    if (isPresent(MDCClass)) {
      let mdcComponent = new MDCClass(get(this, 'element'));
      set(this, '_mdcComponent', mdcComponent);
      this.updateElement(mdcComponent);
      this.bindListeners(mdcComponent);
      get(this, 'initialize')(mdcComponent);
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let mdcComponent = get(this, '_mdcComponent');
    mdcComponent && this.updateElement(mdcComponent);
  },

  willDestroyElement() {
    this._super(...arguments);
    let mdcComponent = get(this, '_mdcComponent');
    mdcComponent && mdcComponent.destroy();
  },

  initialize() {},

  updateElement(/* mdcComponent */) { },
  bindListeners(/* mdcComponent */) { }
});
