import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberwarpdrivetest/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | loading-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LoadingBar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <LoadingBar>
        template block text
      </LoadingBar>
    `);

    assert.dom().hasText('template block text');
  });
});
