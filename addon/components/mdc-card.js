import Component from '@ember/component';
import { or } from '@ember/object/computed';
import layout from '../templates/components/mdc-card';

export default Component.extend({
  layout,
  title: null,
  subtitle: null,
  isLargeTitle: true,
  classNames: ['mdc-card'],

  hasTitleOrSubtitle: or('title', 'subtitle')
});
