import RequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';

const manager = new RequestManager().use([Fetch]);

export default fetch;
