const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Navbar icon titles', function() {
  describe('GitHub', function() {
    it('should be - GitHub', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubIconTitle = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[0].getAttribute('title');

        expect(githubIconTitle).to.equal('GitHub');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram', function() {
    it('should be - Instagram', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramIconTitle = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[1].getAttribute('title');

        expect(instagramIconTitle).to.equal('Instagram');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn', function() {
    it('should be - LinkedIn', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinIconTitle = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[2].getAttribute('title');

        expect(linkedinIconTitle).to.equal('LinkedIn');
        done();
      }).catch(err => done(err));
    });
  });
});