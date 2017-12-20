import { get } from '@ember/object';
import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import { and } from '@ember/object/computed';
import layout from '../templates/components/mdc-toolbar';

export default Component.extend({
  layout,
  isFixed: false,
  isWaterfall: false,
  isLastRowFixed: false,
  isFlexible: false,
  isFlexibleDefaultBehavior: true,
  contentElement: null,
  contentSelector: null,
  tagName: 'header',
  classNames: ['mdc-toolbar'],
  classNameBindings: [
    'isFixed:mdc-toolbar--fixed',
    'isWaterfall:mdc-toolbar--waterfall',
    'isLastRowFixed:mdc-toolbar--fixed-lastrow-only',
    'isFlexible:mdc-toolbar--flexible',
    'useDefaultFlexibleBehavior:mdc-toolbar--flexible-default-behavior'
  ],

  useDefaultFlexibleBehavior: and('isFlexible', 'isFlexibleDefaultBehavior'),

  didInsertElement() {
    this._super(...arguments);
    let contentElement = get(this, 'contentElement');
    let contentSelector = get(this, 'contentSelector');
    let toolbar = mdc.toolbar.MDCToolbar.attachTo(get(this, 'element'));

    if (isPresent(contentElement)) {
      toolbar.fixedAdjustElement = contentElement;
    } else if (isPresent(contentSelector)) {
      toolbar.fixedAdjustElement = document.querySelector(contentSelector);
    }

    toolbar.listen('MDCToolbar:change', get(this, 'change'));
  },

  change() {}
});
