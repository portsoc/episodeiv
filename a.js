var starwars = {

  audio: null,

  togglePause: function() {
    if (starwars.audio.paused) {
      starwars.audio.play();
    } else {
      starwars.audio.pause();
    }
	},

	music: function() {
    starwars.audio = new Audio('http://bit.ly/2fSoYxC');
    starwars.audio.play();
	},

	start: function() {
    setTimeout(starwars.music, 6000);
	}

};

window.addEventListener("load", starwars.start);
