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
    {{@contact.firstName}}
    {{@contact.lastName}}
    {{@contact.notes}}
    {{@contact.title}}
  </template>
}
