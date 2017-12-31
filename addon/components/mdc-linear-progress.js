import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import { MDCLinearProgress } from '@material/linear-progress';
import layout from '../templates/components/mdc-linear-progress';

export default MDCBase.extend({
  layout,
  mdcClass: MDCLinearProgress,
  role: 'progressbar',
  buffer: null,
  progress: 0,
  isClosed: false,
  isReversed: false,
  isDeterminate: true,

  classNames: ['mdc-linear-progress'],
  classNameBindings: [
    'isClosed:mdc-linear-progress--closed',
    'isReversed:mdc-linear-progress--reversed',
    'isDeterminate::mdc-linear-progress--indeterminate'
  ],
  attributeBindings: ['role'],

  updateElement(mdcComponent) {
    mdcComponent.buffer = get(this, 'buffer');
    mdcComponent.progress = get(this, 'progress');
    mdcComponent.determinate = get(this, 'isDeterminate');
    mdcComponent.reverse = get(this, 'isReversed');
  }
});
