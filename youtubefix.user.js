// ==UserScript==
// @name        youtubefix
// @namespace   https://github.com/flrl/userscripts/
// @version     1
// @grant       none
// @include     https://youtube.com
// @include     https://youtube.com/*
// @include     https://www.youtube.com
// @include     https://www.youtube.com/*
// ==/UserScript==

'use strict';

var fade_selectors = [
];

var remove_selectors = [
    'ytd-rich-shelf-renderer[is-shorts=""]',
];

var observer = new window.MutationObserver(function() {
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
