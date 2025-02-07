import Component from '@glimmer/component';
import { Request } from '@warp-drive/ember';

export default class ContactList extends Component {
  <template>
    test
    <Request @request={{@model.contact}}>
      <:loading as |state|>
        Please wait, Progress
        {{state.completedRatio}}
      </:loading>

      <:error as |error|>
        {{error}}
      </:error>

      <:content as |contact|>
        {{#each contact.data as |contact|}}
          {{contact.firstName}}
          {{contact.lastName}}
          {{contact.notes}}
        {{/each}}
      </:content>
    </Request>
  </template>
}
