// export { default } from 'ember-data/store';
import RequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import Store from '@ember-data/store';
import { modelHandler } from 'emberwarpdrivetest/utils/handlers';

export default class StoreService extends Store {
  constructor() {
    super(...arguments);
    this.requestManager = new RequestManager();
    this.requestManager.use([modelHandler, Fetch]);
  }
}
