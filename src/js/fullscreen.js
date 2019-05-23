import fscreen from 'fscreen';

// convert HTMLCollection of images within document to an array
const imgArray = [...document.images];

const toggleFullscreen = e => {

  // if full-screen mode is supported
  if (fscreen.fullscreenEnabled) {

    // if full-screen mode is disabled
    if (!fscreen.fullscreenElement) {
      
      /**
       * for Safari compatibility:
       * remove class from clicked image
       */
      e.target.removeAttribute('class');

      // enable full-screen mode for clicked image
      fscreen.requestFullscreen(e.target).catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });

    // if full-screen mode is enabled
    } else {

      /**
       * for Safari compatibility:
       * add class back to clicked image
       */
      if (e.target.alt === 'Blouberg Beach' || e.target.alt === 'Alston') {
        e.target.setAttribute('class', 'photo--landscape');
      } else {
        e.target.setAttribute('class', 'photo--square');
      }

      // disable full-screen mode
      fscreen.exitFullscreen().catch(err => {
        alert(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  }
};

// toggle full-screen mode when an image is clicked
imgArray.forEach(img => {
  img.addEventListener('click', toggleFullscreen, false);
});

fscreen.addEventListener('fullscreenchange', e => {
  if (fscreen.fullscreenElement) {
    console.log('Enter full-screen');
  } else {
    console.log('Exit full-screen');
  }
});