import Ripple from '../mixins/ripple';
import Component from '@ember/component';
import layout from '../templates/components/mdc-fab';

export default Component.extend(Ripple, {
  layout,
  tagName: 'button',
  icon: null,
  isMini: false,
  isExited: false,
  ariaLabel: null,
  classNames: ['mdc-fab', 'material-icons'],
  classNameBindings: [
    'isMini:mdc-fab--mini',
    'isExited:mdc-fab--exited'
  ],
  attributeBindings: ['ariaLabel:aria-label']
});
