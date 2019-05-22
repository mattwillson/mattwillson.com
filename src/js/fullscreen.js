// Convert HTMLCollection of images within document to an array
const imgArray = Array.prototype.slice.call(document.images);

const toggleFullscreen = e => {
  // If full-screen mode is supported
  if (document.fullscreenEnabled) {

    // If full-screen mode is disabled
    if (!document.fullscreenElement) {

      // Enable full-screen mode for image that was clicked
      e.target.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });

    // If full-screen mode is enabled
    } else {

      // Disable full-screen mode
      document.exitFullscreen().catch(err => {
        alert(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  }
};

// Toggle full-screen mode when an image is clicked
imgArray.forEach(img => {
  img.addEventListener('click', toggleFullscreen, false);
});

document.addEventListener('fullscreenchange', e => {
  if (document.fullscreenElement) {
    console.log('Enter full-screen');
  } else {
    console.log('Exit full-screen');
  }
});