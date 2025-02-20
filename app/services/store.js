import Store from 'ember-data/store';
import { setBuildURLConfig } from '@ember-data/request-utils';
import RequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import { LegacyNetworkHandler } from '@ember-data/legacy-compat';

export default class extends Store {
  requestManager = new RequestManager();
  constructor(args) {
    super(args);
    setBuildURLConfig({
      host: 'http://localhost:8000', // no trailing slash, though '/' is valid
      namespace: 'api/0.1', // no leading slash and again no trailing slash
    });
    this.requestManager.use([LegacyNetworkHandler, Fetch]);
  }
}
