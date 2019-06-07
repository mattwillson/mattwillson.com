const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Splash text', function() {
  it('should be - Software engineer based<br>in Raleigh, North Carolina', function(done) {
    JSDOM.fromURL('http://localhost:8080/').then(dom => {
      const splashText = dom.window.document.querySelector('body > div.splash > p').innerHTML;
      expect(splashText).to.equal('Software engineer based<br>in Raleigh, North Carolina');
      done();
    }).catch(err => done(err));
  });
});