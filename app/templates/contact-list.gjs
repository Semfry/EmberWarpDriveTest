import ContactTable from '../components/contact-table';
import { pageTitle } from 'ember-page-title';
import Component from '@glimmer/component';

export default class ApplicationTemplate extends Component {
  <template>
    {{pageTitle "Contact List"}}

    <div class="text-lg">List Page</div>

    <ContactTable />
  </template>
}
