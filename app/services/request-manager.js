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

// const JsonApiHandler = {
//   request(context, next) {
//     const { request } = context;
//     const updatedRequest = Object.assign({}, request, {
//       url: request.url + '?format=vnd.api%2Bjson',
//     });

//     return next(updatedRequest);
//   },
// };

export default class Requests extends RequestManager {
  constructor(args) {
    super(args);
    this.use([LegacyNetworkHandler, Fetch]);
  }
}
