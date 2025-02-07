import Component from '@glimmer/component';
import { Request } from '@warp-drive/ember';

export default class ContactList extends Component {
  <template>
    test
    <Request @request={{@model}}>
      <:loading as |state|>
        Please wait, Progress
        {{state.completedRatio}}
      </:loading>

      <:error as |error|>
        {{error}}
      </:error>

      <:content as |contactContent|>
        {{#each contactContent.data as |contact|}}
          {{contact.firstName}}
          {{contact.lastName}}
          {{contact.notes}}
        {{/each}}
      </:content>
    </Request>

    {{outlet}}
  </template>
}
