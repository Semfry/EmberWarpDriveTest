import ContactTable from '../components/contact-table';
import Route from 'ember-route-template';

import { pageTitle } from 'ember-page-title';

export default Route(
  <template>
    {{pageTitle "Contact List"}}

    <div class="text-lg">List Page</div>

    <ContactTable @model={{@model.contact}} />
  </template>
);
