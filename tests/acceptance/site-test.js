import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | site', function (hooks) {
  setupApplicationTest(hooks);

  // Index
  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    // Nav
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Site Title');
    // Jumbo
    assert.dom('h2').hasText('Site Welcome Statement!');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  // About
  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    // Nav
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Site Title');
    // Jumbo
    assert.dom('h2').hasText('About');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  // Contact
  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    // Nav
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Site Title');
    // Jumbo
    assert.dom('h2').hasText('Contact');

    assert.dom('.jumbo a.button').hasText('About');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('Site Title');
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
