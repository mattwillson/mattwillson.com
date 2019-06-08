const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Navbar link href attributes', function() {
  describe('Home', function() {
    it('should be - https://mattwillson.com', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const homeLinkHref = dom.window.document.getElementsByClassName('navbar__home')[0].getAttribute('href');

        expect(homeLinkHref).to.equal('https://mattwillson.com');
        done();
      }).catch(err => done(err));
    });
  });

  describe('GitHub', function() {
    it('should be - https://www.github.com/mattwillson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubLinkHref = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[0].getAttribute('href');

        expect(githubLinkHref).to.equal('https://www.github.com/mattwillson');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram', function() {
    it('should be - https://www.instagram.com/matt.willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramLinkHref = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[1].getAttribute('href');

        expect(instagramLinkHref).to.equal('https://www.instagram.com/matt.willson');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn', function() {
    it('should be - https://www.linkedin.com/in/matt-willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinLinkHref = dom.window.document.getElementsByClassName('navbar__link-box')[0].children[2].getAttribute('href');

        expect(linkedinLinkHref).to.equal('https://www.linkedin.com/in/matt-willson');
        done();
      }).catch(err => done(err));
    });
  });
});