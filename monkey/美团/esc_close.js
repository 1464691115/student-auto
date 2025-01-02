// ==UserScript==
// @name         美团esc时，关闭弹窗
// @namespace    http://tampermonkey.net/
// @version      2025-01-02
// @description  try to take over the world!
// @author       You
// @match        https://e.waimai.meituan.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meituan.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(event) {

        if (event.keyCode === 27) { // 27是ESC键的keyCode
            var escape = document.getElementsByClassName('close');

            for(let i=0;i<=escape.length;i++){
                escape[i].click()
            }
        }


    });

})();