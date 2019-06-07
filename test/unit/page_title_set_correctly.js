const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Page title', function() {
  it('should be - Matt Willson', function(done) {
    JSDOM.fromURL('http://localhost:8080/').then(dom => {
      expect(dom.window.document.title).to.equal('Matt Willson');
      done();
    }).catch(err => done(err));
  });
});