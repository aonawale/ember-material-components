import { get } from '@ember/object';
import MDCListItem from './mdc-list-item';
import { inject as service } from '@ember/service';
import layout from '../templates/components/navbar-item';

export default MDCListItem.extend({
  router: service(),

  layout,
  tagName: 'a',
  hasRipples: true,
  isActivated: true,
  attributeBindings: ['route:href'],

  click(event) {
    event.preventDefault();
    get(this, 'router').transitionTo(get(this, 'route'));
  }
});
