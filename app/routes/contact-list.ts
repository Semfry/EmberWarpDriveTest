import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ContactListRoute extends Route {
  @service store;
  @service router;

  model() {}
}
