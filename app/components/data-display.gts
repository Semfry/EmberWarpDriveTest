import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class dataDisplay extends Component {
  @tracked nametext = 'List Page';

  <template>
    <div class="text-lg">
      click this to go to
      {{this.nametext}}
    </div>
  </template>
}
