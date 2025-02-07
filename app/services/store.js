// export { default } from 'ember-data/store';
import Store from '@ember-data/store';
import { service } from '@ember/service';

export default class StoreService extends Store {
  @service('request') requestManager;
}
