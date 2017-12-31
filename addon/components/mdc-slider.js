import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import { MDCSlider } from '@material/slider';
import layout from '../templates/components/mdc-slider';

export default MDCBase.extend({
  layout,
  mdcClass: MDCSlider,
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

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCSlider:input', get(this, 'input'));
    mdcComponent.listen('MDCSlider:change', get(this, 'change'));
  },

  updateElement(mdcComponent) {
    mdcComponent.min = get(this, 'min');
    mdcComponent.max = get(this, 'max');
    mdcComponent.value = get(this, 'value');
    mdcComponent.disabled = !!get(this, 'isDisabled');
  },

  input() {},
  change() {}
});
