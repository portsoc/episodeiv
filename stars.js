var starwars = {

	stars: function() {

		var
			c,
			svg,
			ns = "http://www.w3.org/2000/svg",
			cols = [
				"#fff", "#777", "#333", "#333",
				"#222", "#222", "#222", "#111",
				"#111", "#111", "#111", "#111"
			],

			random = function(s) {
				return Math.random()*s;
			},

			s = function(i, size) {
				svg = document.createElementNS(ns, "svg");
				svg.setAttributeNS(null, "width", size);
				svg.setAttributeNS(null, "height", size);
				svg.setAttributeNS(null, "viewBox", "0 0 2000 2000");
				svg.setAttributeNS(null, "preserveAspectRatio", "xMinYMin slice");
				svg.setAttributeNS(null, "style", "position: absolute; top:0; left:0; width: 100%; padding: 0; margin: 0;");
				document.body.insertBefore(svg, document.body.firstChild);

				while (i) {
					i--;
					c = document.createElementNS(ns, "circle");
					c.setAttributeNS(null, "fill", cols[Math.floor(random(9))]);
					c.setAttributeNS(null, "cx", random(2000));
					c.setAttributeNS(null, "cy", random(2000));
					c.setAttributeNS(null, "r", random(1.5));
					svg.appendChild(c);
				}
			}

		s(10000, 2000);

	},

	music: function() {
		var audio = new Audio('theme.ogg');
		audio.play();
	},

	logo: function() {
		document.body.innerHTML += '<img id=logo src="logo.svg">';
	},

	start: function() {
		starwars.music();
		starwars.stars();
		starwars.logo();
	}

}

window.addEventListener("load", starwars.start);
