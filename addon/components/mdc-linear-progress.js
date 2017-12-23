import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import layout from '../templates/components/mdc-linear-progress';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.linearProgress.MDCLinearProgress,
  role: 'progressbar',
  buffer: 0,
  progress: 0,
  isClosed: false,
  isReversed: false,
  isIndeterminate: false,

  _mdcComponent: null,

  classNames: ['mdc-linear-progress'],
  classNameBindings: [
    'isClosed:mdc-linear-progress--closed',
    'isReversed:mdc-linear-progress--reversed',
    'isIndeterminate:mdc-linear-progress--indeterminate'
  ],
  attributeBindings: ['role'],

  updateElement(mdcComponent) {
    mdcComponent.buffer = get(this, 'buffer');
    mdcComponent.progress = get(this, 'progress');
  }
});
