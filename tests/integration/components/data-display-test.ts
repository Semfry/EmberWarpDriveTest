import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberWarpDriveTest/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-display', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DataDisplay />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DataDisplay>
        template block text
      </DataDisplay>
    `);

    assert.dom().hasText('template block text');
  });
});
