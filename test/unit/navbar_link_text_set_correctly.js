const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Navbar link text', function() {
  describe('Home', function() {
    it('should be - Matt Willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const homeLinkText = dom.window.document.getElementsByClassName('navbar__home')[0].innerHTML;

        expect(homeLinkText).to.equal('\n        Matt Willson\n      ');
        done();
      }).catch(err => done(err));
    });
  });

  describe('GitHub', function() {
    it('should be - GitHub', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubLinkText = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[0].innerHTML;

        expect(githubLinkText).to.equal('\n          GitHub\n        ');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram', function() {
    it('should be - Instagram', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramLinkText = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[1].innerHTML;

        expect(instagramLinkText).to.equal('\n          Instagram\n        ');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn', function() {
    it('should be - LinkedIn', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinLinkText = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[2].innerHTML;

        expect(linkedinLinkText).to.equal('\n          LinkedIn\n        ');
        done();
      }).catch(err => done(err));
    });
  });
});