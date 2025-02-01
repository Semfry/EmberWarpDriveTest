import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// import { service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default class ContactList extends Component {
  // @service store;

  @tracked contact;

  constructor() {
    super(...arguments);
    this.contactTask.perform();
  }

  contactTask = task({ restartable: true }, async () => {
    await timeout(600);
    // try {
    // this.contact = await this.store.findall('contacts');
    // } catch {
    // console.log('ERROR: Cannot find contact');
    // }
  });

  <template>
    test
    {{#if this.contactTask.isRunning}}please wait...{{else}}
      {{#each this.contact as |contact|}}
        {{contact.firstName}}
        {{contact.lastName}}
        {{contact.town}}
      {{/each}}
    {{/if}}
  </template>
}
