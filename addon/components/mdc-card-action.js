import MDCButton from './mdc-button';
import layout from '../templates/components/mdc-card-action';

export default MDCButton.extend({
  layout,
  isCompact: true,
  classNames: ['mdc-card__action']
});
