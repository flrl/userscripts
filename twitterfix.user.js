// ==UserScript==
// @name        twitterfix
// @namespace   https://github.com/flrl/userscripts/
// @version     5
// @grant       none
// @include     https://twitter.com
// @include     https://twitter.com/*
// ==/UserScript==

'use strict';
console.log('hi');

var remove_selectors = [
    'div[aria-label="Timeline: Trending now"',
    'div[aria-label="Who to follow"]',
];

remove_selectors.forEach(function(s) {
    var e = document.querySelector(s);
    if (e) {
        e.style.setProperty('border', '1px solid magenta', 'important');
    }
});
