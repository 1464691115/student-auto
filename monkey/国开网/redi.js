// ==UserScript==
// @name         自动答题
// @namespace    http://tampermonkey.net/
// @version      2024-12-14
// @description  try to take over the world!
// @author       You
// @match        https://moodle.syxy.ouchn.cn/mod/quiz/view.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ouchn.cn
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const button = document.querySelector('.btn.btn-secondary');
  button.click();
  // Your code here...
})();
