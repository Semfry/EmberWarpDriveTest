import RequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import { modelHandler } from 'emberwarpdrivetest/utils/handlers';

export default class extends RequestManager {
  constructor(createArgs) {
    super(createArgs);
    this.use([modelHandler, Fetch]);
  }
}
