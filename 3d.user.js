// ==UserScript==
// @name         Stack Overflow 3D glasses Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       DonaldDuck313
// @match        https://stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.type = "text/css";
    css.href = "https://github.com/wdpd/StackOverflowFilters/raw/main/3d.css";
    document.head.prepend(css);

    document.body.classList.add("theme-custom", "theme-3d");
})();
