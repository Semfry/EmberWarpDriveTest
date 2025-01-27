import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class DataDisplay extends Component {
  @service store;

  @tracked nametext = 'List Page';

  <template>
    <div class="text-lg">
      data
    </div>
  </template>
}
