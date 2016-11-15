// use Alt+LeftArrow or Alt+RightArrow to move between stylesheets
(function() {
  "use strict";
  let sheets = [
          'style/style0.css',
          'style/style1.css',
          'style/style2.css',
          'style/style3.css',
          'style/style4.css',
          'style/style5.css',
          'style/style6.css',
          'style/style7.css',
          'style/style8.css',
          'style/wrong.css'
      ],
      sheetid = sheets.length-2,

      nudge = (direction) => {
        sheetid += direction;
        sheetid = Math.min(sheets.length-1,sheetid);
        sheetid = Math.max(0,sheetid);
      	sheet.setAttribute('href', `${sheets[sheetid]}`);
      },

      handler = (event) => {
          if (event.key=="ArrowDown" || event.key=="ArrowRight") {
              nudge(+1);
          }
          if (event.key=="ArrowUp" || event.key=="ArrowLeft") {
              nudge(-1);
          }
          if (event.key=="p") {
            toggleAnimation();
          }
      },

      loaded = () => {
          nudge(0);
      },

      toggleAnimation = () => {
        logo.classList.toggle("paused");
        long.classList.toggle("paused");
        crawl.classList.toggle("paused");
        if (starwars) {
          starwars.togglePause();
        }
      };

    document.addEventListener("keydown", handler);
    window.addEventListener("load", loaded);
})();
