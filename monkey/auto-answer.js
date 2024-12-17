// ==UserScript==
// @name         自动答题
// @namespace    http://tampermonkey.net/
// @version      2024-10-29
// @description  try to take over the world!
// @author       You
// @match        https://moodle.syxy.ouchn.cn/mod/quiz/attempt.php?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ouchn.cn
// @grant        none
// ==/UserScript==

(function () {
    function run() {
        const getSearchQuery = (key) => location.search.indexOf(key) >= 0 && location.search.match(new RegExp(`${key}=([^&]+)`))[1] || '',
            cmid = getSearchQuery('cmid'),
            storageKey = 'answer_' + cmid

        const list = document.getElementsByClassName('answer')

        let answer = []

        try {
            answer = JSON.parse(localStorage.getItem(storageKey)) || []
        } catch (error) { }


        for (let i = 0; i < list.length; i++) {
            const element = list[i]
            let self_optionsEl


            for (let o = 0; o < element.children.length; o++) {
                const optionsEl = element.children[o];
                const options = optionsEl.getElementsByTagName('label')?.[0]?.innerText || optionsEl.getElementsByTagName('p')?.[0]?.innerText

                if (answer[i].trim().match(/正确答案是：(.*)/)[1] == options.trim()) {
                    self_optionsEl = optionsEl
                    break
                }

                if (answer[i].trim().includes(options.trim())) {
                    self_optionsEl = optionsEl
                }
            }


            try {
                self_optionsEl.getElementsByTagName('input')?.[1].click()
            } catch (error) {
                self_optionsEl.getElementsByTagName('input')?.[0].click()
                console.log(error);
            }


        }

    }
    run()
})();