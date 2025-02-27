import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class ContactList extends Component {
  @service router;
  @service store;

  constructor() {
    super(...arguments);

    console.log(this.args.contact);
  }

  <template>
    {{@contact.attributes.first-name}}
    {{@contact.attributes.last-name}}
    {{@contact.attributes.notes}}
    {{@contact.attributes.title}}
  </template>
}
