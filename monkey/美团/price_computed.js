// ==UserScript==
// @name         单价计算器
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
    const popup = document.createElement('div');

    popup.style.position = 'fixed';
    popup.style.right = '5%';
    popup.style.top = '30%';
    popup.style.width = '300px';
    popup.style.height = '50px';
    popup.style.display = 'flex';
    popup.style.flexWrap = 'nowrap';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.backgroundColor = '#fff';
    popup.style.columnGap = '10px';

    const pInput = document.createElement('input');
    pInput.placeholder = '售价(￥)';
    const wInput = document.createElement('input');
    wInput.placeholder = '重量(g)';
    wInput.defaultValue = '400'

    const price_popup = document.createElement('span');
    price_popup.className = 'price_popup';
    price_popup.innerText = '0';

    [pInput, wInput].forEach((element) => {
        element.style.width = '80px';
        element.style.height = '30px';
        element.oninput = function (e) {
            price_popup.innerText = (pInput.value / 500) * wInput.value * 1.3;
        };

        popup.appendChild(element);
    });

    popup.append('=');

    popup.appendChild(price_popup);

    document.body.appendChild(popup);

})();