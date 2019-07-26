// ==UserScript==
// @name        twitterfix
// @namespace   https://github.com/flrl/userscripts/
// @version     9
// @grant       none
// @include     https://twitter.com
// @include     https://twitter.com/*
// ==/UserScript==

'use strict';

var remove_selectors = [
    'div[aria-label="Timeline: Trending now"',
    'aside[aria-label="Who to follow"]',
];

var observer = new window.MutationObserver(function() {
    var sidebar = document.querySelector('div[data-testid="sidebarColumn"]');
    sidebar.style.setProperty('width', '120px', 'important');

    remove_selectors.forEach(function(s) {
        var e = document.querySelector(s);
        if (e) {
            e.style.setProperty('opacity', '0.1', 'important');
        }
    });
});

observer.observe(document, { childList: true, subtree: true });
