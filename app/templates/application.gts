import Route from 'ember-route-template';
import { pageTitle } from 'ember-page-title';

export default Route(
  <template>
    {{pageTitle "ember Warpdrive Test"}}

    <div class="text-2xl">Ember Warpdrive Test</div>

    {{outlet}}
  </template>
);
