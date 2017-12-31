import MDCBase from './-mdc-base';
import { MDCGridList } from '@material/grid-list';
import layout from '../templates/components/mdc-grid-list';

export default MDCBase.extend({
  layout,
  mdcClass: MDCGridList,

  classNames: ['mdc-grid-list']
});
