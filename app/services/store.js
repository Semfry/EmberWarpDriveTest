import RequestManager from '@ember-data/request';

import Store from 'ember-data/store';
import Fetch from '@ember-data/request/fetch';

export default class StoreService extends Store {
  constructor() {
    super(...arguments);
    this.requestManager = new RequestManager();
    this.requestManager.use([Fetch]);
  }
}
