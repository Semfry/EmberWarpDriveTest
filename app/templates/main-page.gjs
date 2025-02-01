import HomeText from '../components/home-text';
import { pageTitle } from 'ember-page-title';
import Component from '@glimmer/component';
import { LinkTo } from '@ember/routing';

export default class ApplicationTemplate extends Component {
  <template>
    {{pageTitle "Main Page"}}

    <LinkTo class="text-blue-600" @route="contact-list">
      <HomeText />
    </LinkTo>
  </template>
}
