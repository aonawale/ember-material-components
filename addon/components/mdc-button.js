import Ripple from '../mixins/ripple';
import Component from '@ember/component';
import layout from '../templates/components/mdc-button';

export default Component.extend(Ripple, {
  layout,
  text: null,
  icon: null,
  tagName: 'button',
  isDense: false,
  isDisabled: false,
  isRaised: false,
  isCompact: false,
  isStroked: false,
  isUnelevated: false,
  classNames: ['mdc-button'],
  classNameBindings: [
    'isRaised:mdc-button--raised',
    'isDense:mdc-button--dense',
    'isCompact:mdc-button--compact',
    'isStroked:mdc-button--stroked',
    'isUnelevated:mdc-button--unelevated'
  ],
  attributeBindings: ['isDisabled:disabled', 'for']
});
