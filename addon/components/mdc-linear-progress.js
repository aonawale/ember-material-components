import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../templates/components/mdc-linear-progress';

export default Component.extend({
  layout,
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

  didInsertElement() {
    this._super(...arguments);
    let linearProgress = new mdc.linearProgress.MDCLinearProgress(get(this, 'element'));
    set(this, '_mdcComponent', linearProgress);
    linearProgress.buffer = get(this, 'buffer');
    linearProgress.progress = get(this, 'progress');
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let linearProgress = get(this, '_mdcComponent');
    linearProgress.buffer = get(this, 'buffer');
    linearProgress.progress = get(this, 'progress');
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  },
});
