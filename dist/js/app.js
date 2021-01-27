/******/ (() => { // webpackBootstrap
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
function main() {
  var menuIconOpen = document.getElementsByClassName("open")[0];
  var menuIconClose = document.getElementsByClassName("close")[0];
  var menuItems = document.getElementsByClassName("menu");
  menuIconClose.style.display = "none";

  menuIconOpen.onclick = function () {
    this.style.display = "none";
    menuIconClose.style.display = "block";
    menuDisplay("show", menuItems);
  };

  menuIconClose.onclick = function () {
    this.style.display = "none";
    menuIconOpen.style.display = "block";
    menuDisplay("hide", menuItems);
  };
}

function menuDisplay(state, items) {
  if (state == "show") {
    for (var i = 1; i < items.length; i++) {
      items[i].classList.add("show");
    }
  } else {
    for (var i = 1; i < items.length; i++) {
      items[i].classList.remove("show");
    }
  }
}

window.onload = function () {
  main();
};
})();

(() => {
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \"}\".\n   ╷\n91 │ }\n   │  ^\n   ╵\n  src\\partials\\_main.scss 91:2  @import\n  Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\src\\app.scss 4:9                     root stylesheet\n    at processResult (Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\webpack\\lib\\NormalModule.js:597:19)\n    at Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\webpack\\lib\\NormalModule.js:691:5\n    at Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:91131:16)\n    at _render_closure1.call$2 (Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:80007:12)\n    at _RootZone.runBinary$3$3 (Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:27193:18)\n    at _FutureListener.handleError$1 (Z:\\Desktop\\corso-boolean\\esercizi-boolean\\esercizio44-Sass\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:25721:19)");
})();

/******/ })()
;