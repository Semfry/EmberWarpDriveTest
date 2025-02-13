import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MainPage extends Component {
  @tracked nameText = 'List Page';

  <template>
    <div class="text-lg">
      click this to go to
      {{this.nameText}}
    </div>
  </template>
}
