import EmberRouter from '@ember/routing/router';
import config from 'emberwarpdrivetest/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('main-page', { path: '' });
  this.route('contact-list');
});
