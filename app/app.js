import Application from '@ember/application';
import compatModules from '@embroider/virtual/compat-modules';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { setBuildURLConfig } from '@ember-data/request-utils';
import 'emberwarpdrivetest/app.css';

setBuildURLConfig({
  host: 'http://localhost:8000', // no trailing slash, though '/' is valid
  namespace: 'api/0.1', // no leading slash and again no trailing slash
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver.withModules(compatModules);
}

loadInitializers(App, config.modulePrefix, compatModules);
