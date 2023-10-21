// ==UserScript==
// @name        iviewfix
// @namespace   https://github.com/flrl/userscripts/
// @version     2
// @grant       none
// @include     https://iview.abc.net.au
// @include     https://iview.abc.net.au/*
// ==/UserScript==

'use strict';

var fix_display_none_selectors = [
    '.iv-nponE', // the horizontal scroll buttons
];

var observer = new window.MutationObserver(function() {
    fix_display_none_selectors.forEach(function(s) {
        const nodeList = document.querySelectorAll(s);
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.setProperty('display', 'block', 'important');
        }
    });
});

observer.observe(document, { childList: true, subtree: true });
