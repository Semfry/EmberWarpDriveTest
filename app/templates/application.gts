import Route from 'ember-route-template';
import { pageTitle } from 'ember-page-title';

export default Route(
  <template>
    {{pageTitle "emberWarpDriveTest"}}

    <div class="text-2xl">Ember Warp Drive Test</div>

    {{outlet}}
  </template>
);
