import HomeText from '../components/home-text';
import Route from 'ember-route-template';

import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

export default Route(
  <template>
    {{pageTitle "Main Page"}}

    <LinkTo class="text-blue-600" @route="contact-list">
      <HomeText />
    </LinkTo>
  </template>
)

