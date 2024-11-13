// ==UserScript==
// @name        twitterfix
// @namespace   https://github.com/flrl/userscripts/
// @version     31
// @grant       none
// @include     https://twitter.com
// @include     https://twitter.com/*
// @include     https://x.com
// @include     https://x.com/*
// ==/UserScript==

'use strict';

var fade_selectors = [
    'aside[aria-label="Who to follow"]',
    'aside[aria-label="Relevant people"]',
];

var remove_selectors = [
    'div[aria-label="Trending"]',
    'div[aria-label="Timeline: Trending now"]',
    'div[aria-label="Timeline: "]',
    'a[aria-label$="View Tweet analytics"]',
    'aside[aria-label="Get Verified"]',
    'aside[aria-label~="Premium"]',
    'aside[aria-label="Showcase your best content with Highlights"]',
    'aside[aria-label="Expiring soon!"]',
    'a[aria-label="Grok"]',
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
