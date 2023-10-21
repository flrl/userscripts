// ==UserScript==
// @name        iviewfix
// @namespace   https://github.com/flrl/userscripts/
// @version     1
// @grant       none
// @include     https://iview.abc.net.au
// @include     https://iview.abc.net.au/*
// ==/UserScript==

'use strict';

var fix_display_none_selectors = [
    '.iv-nponE',
];

var observer = new window.MutationObserver(function() {
    fix_display_none_selectors.forEach(function(s) {
        var e = document.querySelector(s);
        if (e) {
            e.style.setProperty('display', 'block', 'important');
        }
    });
});

observer.observe(document, { childList: true, subtree: true });
