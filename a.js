window.addEventListener("load", () => {

  // Normally, be quiet, but, if the URL has a fragment add the music.
  if (!!window.location.hash) {
    const audio = new Audio('https://dn721904.ca.archive.org/0/items/tvtunes_4617/Star%20Wars.ogg');
    window.logo.addEventListener( "animationstart", () => audio.play() );
  }

});
