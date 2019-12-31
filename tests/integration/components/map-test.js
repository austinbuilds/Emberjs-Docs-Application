import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an image for the specified parameters', async function (assert) {
    await render(hbs`<Map
      @lat="GitHub-Mark"
      @lng=".png"
      @width="150"
      @height="150"
    />`);

    assert.dom('.map').exists();
    assert.dom('.map img').hasAttribute('alt', 'Map image at coordinates GitHub-Mark, .png');
    assert.dom('.map img').hasAttribute('width', '150');
    assert.dom('.map img').hasAttribute('height', '150');

    let { src } = find('.map img');

    assert.ok(src.includes('GitHub-Mark', '.png'), 'the src should include the lng, lat parameter');
  });

  test('the default alt attribute can be overridden', async function (assert) {
    await render(hbs`<Map
      @lat="GitHub-Mark"
      @lng=".png"
      @width="150"
      @height="150"
      alt="A map of San Francisco"
    />`);

    assert.dom('.map img').hasAttribute('alt', 'A map of San Francisco');
  });

  test('the src, width and height attributes cannot be overridden', async function (assert) {
    await render(hbs`<Map
      @lat="GitHub-Mark"
      @lng=".png"
      @width="150"
      @height="150"
      src="/assets/images/GitHub-Mark.png"
      width="200"
      height="300"
    />`);

    assert.dom('.map img').hasAttribute('width', '150');
    assert.dom('.map img').hasAttribute('height', '150');
  });
});
