// ==UserScript==
// @name        twitterfix
// @namespace   https://github.com/flrl/userscripts/
// @version     18
// @grant       none
// @include     https://twitter.com
// @include     https://twitter.com/*
// ==/UserScript==

'use strict';

var fade_selectors = [
    'aside[aria-label="Who to follow"]',
    'aside[aria-label="Relevant people"]',
];

var remove_selectors = [
    'div[aria-label="Timeline: Trending now"]',
    'div[aria-label="Timeline: "]',
];

var observer = new window.MutationObserver(function() {
    // .r-1ovo9ad is where the rhs width: 360px comes from
    var rhs_widthed = document.querySelectorAll('.r-1ovo9ad');
    var w = Math.floor(window.innerWidth / 6);
    rhs_widthed.forEach(function(e) {
        e.style.setProperty('max-width', w + 'px', 'important');
    });

    fade_selectors.forEach(function(s) {
        var e = document.querySelector(s);
        if (e) {
            e.style.setProperty('opacity', '0.05', 'important');
        }
    });

    remove_selectors.forEach(function(s) {
        var e = document.querySelector(s);
        if (e) {
            e.remove();
        }
    });
});

observer.observe(document, { childList: true, subtree: true });
