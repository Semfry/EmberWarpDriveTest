import { buildBaseURL } from '@ember-data/request-utils';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';

export default class ContactListRoute extends Route {
  @service router;
  @service store;

  model() {
    return {
      contactRequest: this.store.request(query('contact')),
    };
  }
}
