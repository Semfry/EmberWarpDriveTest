import { LegacyNetworkHandler } from '@ember-data/legacy-compat';
import RequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';

// const TestHandler = {
//   async request(context, next) {
//     console.log('TestHandler.request', context.request);
//     const result = await next(Object.assign({}, context.request));
//     console.log('TestHandler.response after fetch', result.response);
//     return result;
//   },
// };

export default class Requests extends RequestManager {
  constructor(args) {
    super(args);
    this.use([LegacyNetworkHandler, Fetch]);
  }
}
