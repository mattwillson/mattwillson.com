const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Navbar link titles', function() {
  describe('Home', function() {
    it('should be - Home', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const homeLinkTitle = dom.window.document.getElementsByClassName('navbar__home')[0].getAttribute('title');

        expect(homeLinkTitle).to.equal('Home');
        done();
      }).catch(err => done(err));
    });
  });

  describe('GitHub', function() {
    it('should be - GitHub', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubLinkTitle = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[0].getAttribute('title');

        expect(githubLinkTitle).to.equal('GitHub');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram', function() {
    it('should be - Instagram', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramLinkTitle = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[1].getAttribute('title');

        expect(instagramLinkTitle).to.equal('Instagram');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn', function() {
    it('should be - LinkedIn', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinLinkTitle = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[2].getAttribute('title');

        expect(linkedinLinkTitle).to.equal('LinkedIn');
        done();
      }).catch(err => done(err));
    });
  });
});