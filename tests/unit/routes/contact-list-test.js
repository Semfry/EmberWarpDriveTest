import { module, test } from 'qunit';
import { setupTest } from 'emberwarpdrivetest/tests/helpers';

module('Unit | Route | contact-list', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:contact-list');
    assert.ok(route);
  });
});
