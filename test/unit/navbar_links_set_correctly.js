const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Navbar links', function() {
  describe('Home text', function() {
    it('should be - Matt Willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const homeLinkText = dom.window.document.getElementsByClassName('navbar__home')[0].innerHTML;

        expect(homeLinkText).to.equal('\n        Matt Willson\n      ');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Home title', function() {
    it('should be - Home', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const homeLinkTitle = dom.window.document.getElementsByClassName('navbar__home')[0].getAttribute('title');

        expect(homeLinkTitle).to.equal('Home');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Home href', function() {
    it('should be - https://mattwillson.com', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const homeLinkHref = dom.window.document.getElementsByClassName('navbar__home')[0].getAttribute('href');

        expect(homeLinkHref).to.equal('https://mattwillson.com');
        done();
      }).catch(err => done(err));
    });
  });

  describe('GitHub text', function() {
    it('should be - GitHub', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubLinkText = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[0].innerHTML;

        expect(githubLinkText).to.equal('\n          GitHub\n        ');
        done();
      }).catch(err => done(err));
    });
  });

  describe('GitHub title', function() {
    it('should be - GitHub', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubLinkTitle = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[0].getAttribute('title');

        expect(githubLinkTitle).to.equal('GitHub');
        done();
      }).catch(err => done(err));
    });
  });

  describe('GitHub href', function() {
    it('should be - https://www.github.com/mattwillson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubLinkHref = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[0].getAttribute('href');

        expect(githubLinkHref).to.equal('https://www.github.com/mattwillson');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram text', function() {
    it('should be - Instagram', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramLinkText = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[1].innerHTML;

        expect(instagramLinkText).to.equal('\n          Instagram\n        ');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram title', function() {
    it('should be - Instagram', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramLinkTitle = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[1].getAttribute('title');

        expect(instagramLinkTitle).to.equal('Instagram');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram href', function() {
    it('should be - https://www.instagram.com/matt.willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramLinkHref = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[1].getAttribute('href');

        expect(instagramLinkHref).to.equal('https://www.instagram.com/matt.willson');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn text', function() {
    it('should be - LinkedIn', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinLinkText = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[2].innerHTML;

        expect(linkedinLinkText).to.equal('\n          LinkedIn\n        ');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn title', function() {
    it('should be - LinkedIn', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinLinkTitle = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[2].getAttribute('title');

        expect(linkedinLinkTitle).to.equal('LinkedIn');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn href', function() {
    it('should be - https://www.linkedin.com/in/matt-willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinLinkHref = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[2].getAttribute('href');

        expect(linkedinLinkHref).to.equal('https://www.linkedin.com/in/matt-willson');
        done();
      }).catch(err => done(err));
    });
  });
});