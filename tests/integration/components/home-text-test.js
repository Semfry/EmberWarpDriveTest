import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberwarpdrivetest/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contact-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ContactTable />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ContactTable>
        template block text
      </ContactTable>
    `);

    assert.dom().hasText('template block text');
  });
});
