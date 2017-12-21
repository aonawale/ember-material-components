import Ripple from '../mixins/ripple';
import Component from '@ember/component';
import { bool } from '@ember/object/computed';
import layout from '../templates/components/mdc-button';

export default Component.extend(Ripple, {
  layout,
  text: null,
  icon: null,
  tagName: 'button',
  isDense: false,
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
  attributeBindings: ['disabled', 'for'],

  _mdcComponent: null,

  hasIcon: bool('icon')
});
