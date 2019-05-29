'use strict';

const assert = require('assert');

const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

describe('Splash', () => {
  it('should have the correct text - Software engineer based\nin Raleigh, North Carolina', done => {
    const driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();

    driver.get('http://www.mattwillson.com')
      .then(() => driver.findElement(By.css('div.splash > p')).getText())
      .then(text => assert.equal(text, 'Software engineer based\nin Raleigh, North Carolina'))
      .then(() => driver.quit())
      .then(done)
      .catch(err => done(err));
  });
});