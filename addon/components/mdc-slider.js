import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../templates/components/mdc-slider';

export default Component.extend({
  layout,
  role: 'slider',
  tabindex: 0,
  label: null,
  min: null,
  max: null,
  value: null,
  step: null,
  isDisabled: false,
  isDiscrete: false,
  hasTrackMarkers: false,

  _mdcComponent: null,

  classNames: ['mdc-slider'],
  classNameBindings: [
    'isDiscrete:mdc-slider--discrete',
    'hasTrackMarkers:mdc-slider--display-markers'
  ],
  attributeBindings: [
    'tabindex',
    'label:aria-label',
    'min:aria-valuemin',
    'max:aria-valuemax',
    'value:aria-valuenow',
    'step:data-step',
    'isDisabled:aria-disabled'
  ],

  didInsertElement() {
    this._super(...arguments);
    let slider = new mdc.slider.MDCSlider(get(this, 'element'));

    set(this, '_mdcComponent', slider);

    this._updateState();

    slider.listen('MDCSlider:input', get(this, 'input'));
    slider.listen('MDCSlider:change', get(this, 'change'));
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this._updateState();
  },

  _updateState() {
    let slider = get(this, '_mdcComponent');
    slider.min = get(this, 'min');
    slider.max = get(this, 'max');
    slider.value = get(this, 'value');
    slider.disabled = !!get(this, 'isDisabled');
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  },

  input() {},
  change() {}
});
