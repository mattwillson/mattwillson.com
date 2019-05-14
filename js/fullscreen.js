document.addEventListener('fullscreenchange', e => {
  if (document.fullscreenElement) {
    console.log('Enter full-screen');
  } else {
    console.log('Exit full-screen');
  }
});

// Toggle full-screen mode when an image element is clicked
document.addEventListener('click', e => {
  if (e.target.tagName == 'IMG') {
    toggleFullscreen(e);
  }
}, false);

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