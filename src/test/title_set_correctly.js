'use strict';

const assert = require('assert');

const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

describe('Title', () => {
  it('should have the correct title - Matt Willson', done => {
    const driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();

    driver.get('http://www.mattwillson.com')
      .then(() => driver.getTitle())
      .then(title => assert.equal(title, 'Matt Willson'))
      .then(() => driver.quit())
      .then(done)
      .catch(err => done(err));
  });
});