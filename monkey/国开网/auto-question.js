// ==UserScript==
// @name         自动答题
// @namespace    http://tampermonkey.net/
// @version      2024-12-14
// @description  try to take over the world!
// @author       You
// @match        https://moodle.syxy.ouchn.cn/mod/quiz/review.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ouchn.cn
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const isAuto = confirm('答案记录完成之后是否自动前往作答页面');

  const cmid = location.search.match(/cmid=(.*)&?/)[1];
  const answerList = [];

  document.querySelectorAll('.rightanswer').forEach((el) => {
    answerList.push(el.innerText);
  });

  localStorage.setItem(`answer_${cmid}_list` ,JSON.stringify(answerList))
  localStorage.setItem(`answer_${cmid}_isAuto` , +isAuto)

  location.href = `https://moodle.syxy.ouchn.cn/mod/quiz/view.php?id=${cmid}`
  // Your code here...
})();
