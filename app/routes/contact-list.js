import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';
import ContactModel from 'emberwarpdrivetest/models/contact';

export default class ContactListRoute extends Route {
  @service router;
  @service store;

  model() {
    return {
      contactRequest: this.store.request(query<ContactModel>('contact')),
    };
  }
}
