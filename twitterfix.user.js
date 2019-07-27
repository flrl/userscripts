// ==UserScript==
// @name        twitterfix
// @namespace   https://github.com/flrl/userscripts/
// @version     11
// @grant       none
// @include     https://twitter.com
// @include     https://twitter.com/*
// ==/UserScript==

'use strict';

var remove_selectors = [
    'div[aria-label="Timeline: Trending now"]',
    'aside[aria-label="Who to follow"]',
];

var observer = new window.MutationObserver(function() {
    // .r-1ovo9ad is where the rhs width: 360px comes from
    var rhs_widthed = document.querySelectorAll('.r-1ovo9ad');
    rhs_widthed.forEach(function(e) {
        console.log(e.style.getPropertyValue('width'));
        e.style.setProperty('width', '180px', 'important');
    });

    remove_selectors.forEach(function(s) {
        var e = document.querySelector(s);
        if (e) {
            e.style.setProperty('opacity', '0.1', 'important');
        }
    });
});

observer.observe(document, { childList: true, subtree: true });
