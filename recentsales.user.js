// ==UserScript==
// @name        recentsales
// @namespace   https://github.com/flrl/userscripts/
// @version     4
// @grant       none
// @include     *
// ==/UserScript==

'use strict';

var remove_selectors = [
    'div[id="recent_sales_ticker"]',
    'div[id="someone-purchased"]',
];

var observer = new window.MutationObserver(function() {
    remove_selectors.forEach(function(s) {
        var e = document.querySelector(s);
        if (e) {
            console.log("removing: " + e.id);
            e.remove();
        }
    });
});

observer.observe(document, { attributes: true, childList: true, subtree: true });
