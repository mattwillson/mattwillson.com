'use strict';

const expect = require('chai').expect;
const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

const driver = new Builder()
  .forBrowser('firefox')
  .setFirefoxOptions(new firefox.Options().addArguments('-headless'))
  .build();

describe('Home link', function() {
  it('should open in the same tab', function(done) {
    driver.get('http://localhost:8080/')

      // click Home link when it is located and visible on the page
      .then(() => driver.wait(until.elementLocated(By.linkText('Matt Willson')), 20000))
      .then(elem => driver.wait(until.elementIsVisible(elem), 20000))
      .then(elem => elem.click())

      // wait until url changes to mattwillson.com
      .then(() => driver.wait(() => (
        driver.getCurrentUrl().then(url => url === 'https://mattwillson.com/')
      ), 20000))

      // ensure only one tab is open
      .then(() => driver.wait(() => (
        driver.getAllWindowHandles().then(arr => arr.length === 1)
      ), 20000))

      // get title after it is loaded to the page
      .then(() => driver.wait(until.elementLocated(By.css('title')), 20000))
      .then(() => driver.getTitle())

      // compare actual title to expected title
      .then(title => expect(title).to.equal('Matt Willson'))
      .then(() => driver.quit())
      .then(done)
      .catch(err => done(err));
  });
});