const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Photos', function() {
  describe('Blouberg Beach', function() {
    describe('alt', function() {
      it('should be - Blouberg Beach', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const bloubergAlt = dom.window.document.getElementsByClassName('photo--landscape')[0].getAttribute('alt');
  
          expect(bloubergAlt).to.equal('Blouberg Beach');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('caption', function() {
      it('should be - Blouberg Beach, South Africa', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const bloubergCaption = dom.window.document.getElementsByClassName('photo')[0].lastElementChild.innerHTML;
  
          expect(bloubergCaption).to.equal('Blouberg Beach, South Africa');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('src', function() {
      it('should be - 0c44b135d32f9b719bd40634d6b30cef.jpg', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const bloubergSrc = dom.window.document.getElementsByClassName('photo--landscape')[0].getAttribute('src');
  
          expect(bloubergSrc).to.equal('0c44b135d32f9b719bd40634d6b30cef.jpg');
          done();
        }).catch(err => done(err));
      });
    });
  });

  describe('Appalachian Trail', function() {
    describe('alt', function() {
      it('should be - Appalachian Trail', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const appalachianAlt = dom.window.document.getElementsByClassName('photo--square')[0].getAttribute('alt');
          expect(appalachianAlt).to.equal('Appalachian Trail');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('caption', function() {
      it('should be - Appalachian Trail, Whitetop, Virginia', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const appalachianCaption = dom.window.document.getElementsByClassName('photo')[1].lastElementChild.innerHTML;
  
          expect(appalachianCaption).to.equal('Appalachian Trail, Whitetop, Virginia');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('src', function() {
      it('should be - 8516160f53939b1e1becc249a9e393fd.jpg', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const appalachianSrc = dom.window.document.getElementsByClassName('photo--square')[0].getAttribute('src');
  
          expect(appalachianSrc).to.equal('8516160f53939b1e1becc249a9e393fd.jpg');
          done();
        }).catch(err => done(err));
      });
    });
  });

  describe('Alston', function() {
    describe('alt', function() {
      it('should be - Alston', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const alstonAlt = dom.window.document.getElementsByClassName('photo--landscape')[1].getAttribute('alt');
  
          expect(alstonAlt).to.equal('Alston');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('caption', function() {
      it('should be - Alston, Raleigh, North Carolina', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const alstonCaption = dom.window.document.getElementsByClassName('photo')[2].lastElementChild.innerHTML;
  
          expect(alstonCaption).to.equal('Alston, Raleigh, North Carolina');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('src', function() {
      it('should be - 1c1893a52cfa0838411933cfd3068d2c.jpg', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const alstonSrc = dom.window.document.getElementsByClassName('photo--landscape')[1].getAttribute('src');
  
          expect(alstonSrc).to.equal('1c1893a52cfa0838411933cfd3068d2c.jpg');
          done();
        }).catch(err => done(err));
      });
    });
  });

  describe('Belle', function() {
    describe('alt', function() {
      it('should be - Belle', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const belleAlt = dom.window.document.getElementsByClassName('photo--square')[1].getAttribute('alt');
  
          expect(belleAlt).to.equal('Belle');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('caption', function() {
      it('should be - Belle, Pittsboro, North Carolina', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const belleCaption = dom.window.document.getElementsByClassName('photo')[3].lastElementChild.innerHTML;
  
          expect(belleCaption).to.equal('Belle, Pittsboro, North Carolina');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('src', function() {
      it('should be - 146f6202b8cf3b95bd089dbf3144f946.jpg', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const belleSrc = dom.window.document.getElementsByClassName('photo--square')[1].getAttribute('src');
  
          expect(belleSrc).to.equal('146f6202b8cf3b95bd089dbf3144f946.jpg');
          done();
        }).catch(err => done(err));
      });
    });
  });
});