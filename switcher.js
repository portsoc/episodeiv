// use Meta+Arrows to move between stylesheets

"use strict";
const sheets = [
  'style/style0.css',
  'style/style1.css',
  'style/style2.css',
  'style/style3.css',
  'style/style4.css',
  'style/style5.css',
  'style/style6.css',
  'style/style7.css',
  'style/style8.css'
];

let sheetid = sheets.length - 2;

function nudge(direction) {
  sheetid = Math.min(sheets.length - 1, sheetid + direction);
  sheetid = Math.max(0, sheetid);
  sheet.setAttribute('href', `${sheets[sheetid]}`);
}

function inputHandler(event) {
  if (event.metaKey) {
    if (event.key == "ArrowDown") nudge(+1);
    if (event.key == "ArrowUp") nudge(-1);
  }
}

function loaded() {
  nudge(window.location.hash ? sheets.length : -sheets.length);
}

document.addEventListener("keydown", inputHandler);
window.addEventListener("load", loaded);
