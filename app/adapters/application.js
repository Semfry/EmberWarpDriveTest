import ENV from '../../config/environment';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.APP.API_URL;
}
