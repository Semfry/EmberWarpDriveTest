import ContactTable from '../components/contact-table';
import Route from 'ember-route-template';

import { pageTitle } from 'ember-page-title';
import { Request } from '@warp-drive/ember';

export default Route(
  <template>
    {{pageTitle "Contact List"}}

    <div class="text-lg">List Page</div>

    test
    <Request @request={{@model.contactRequest}}>

      <:loading as |state|>
        Please wait, Progress
        {{state.completedRatio}}
      </:loading>

      <:content as |ContactContent|>
        <div
          class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
        >
          {{#each ContactContent.data as |contact|}}
            <ContactTable @contact={{contact}} />
          {{/each}}
        </div>
      </:content>

    </Request>

    {{outlet}}
  </template>
);
