import MDCBase from './-mdc-base';
import layout from '../templates/components/mdc-grid-list';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.gridList.MDCGridList,

  classNames: ['mdc-grid-list']
});
