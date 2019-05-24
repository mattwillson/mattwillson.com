import fscreen from 'fscreen';

// convert HTMLCollection of images within document to an array
const imgArr = [...document.images];

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

      // disable full-screen mode
      fscreen.exitFullscreen().catch(err => {
        alert(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  }
};

// toggle full-screen mode when an image is clicked
imgArr.forEach(img => {
  img.addEventListener('click', toggleFullscreen, false);
});

// 'fullscreenchange' event handler
fscreen.addEventListener('fullscreenchange', e => {
  if (fscreen.fullscreenElement) {
    console.log('Enter full-screen');
  } else {
    console.log('Exit full-screen');

    /**
     * for Safari compatibility:
     * add class back to clicked image
     */
    const imgNoClass = imgArr.find(img => img.className === '');

    if (imgNoClass.alt === 'Blouberg Beach' || imgNoClass.alt === 'Alston') {
      imgNoClass.setAttribute('class', 'photo--landscape');
    } else {
      imgNoClass.setAttribute('class', 'photo--square');
    }
  }
});