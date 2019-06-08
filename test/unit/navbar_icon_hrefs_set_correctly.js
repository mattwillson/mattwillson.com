const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Navbar icon href attributes', function() {
  describe('GitHub', function() {
    it('should be - https://www.github.com/mattwillson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const githubIconHref = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[0].getAttribute('href');

        expect(githubIconHref).to.equal('https://www.github.com/mattwillson');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Instagram', function() {
    it('should be - https://www.instagram.com/matt.willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const instagramIconHref = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[1].getAttribute('href');

        expect(instagramIconHref).to.equal('https://www.instagram.com/matt.willson');
        done();
      }).catch(err => done(err));
    });
  });

  describe('LinkedIn', function() {
    it('should be - https://www.linkedin.com/in/matt-willson', function(done) {
      JSDOM.fromURL('http://localhost:8080/').then(dom => {
        const linkedinIconHref = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[2].getAttribute('href');

        expect(linkedinIconHref).to.equal('https://www.linkedin.com/in/matt-willson');
        done();
      }).catch(err => done(err));
    });
  });
});