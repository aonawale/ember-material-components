import Component from '@ember/component';
import layout from '../templates/components/mdc-card';

export default Component.extend({
  layout,
  title: null,
  subtitle: null,
  isLargeTitle: true,
  classNames: ['mdc-card']
});
