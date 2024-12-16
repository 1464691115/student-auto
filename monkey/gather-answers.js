// ==UserScript==
// @name         收集答案
// @namespace    http://tampermonkey.net/
// @version      2024-10-29
// @description  try to take over the world!
// @author       You
// @match        https://moodle.syxy.ouchn.cn/mod/quiz/review.php?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ouchn.cn
// @grant        none
// ==/UserScript==

(function () {
    function getAnswer() {
        const sessionKey = 'FSIFI65QuD'

        const getSearchQuery = (key) => location.search.indexOf(key) >= 0 && location.search.match(new RegExp(`${key}=([^&]+)`))[1] || '',
            cmid = getSearchQuery('cmid'),
            storageKey = 'answer_' + cmid

        let answerList = []

        try {
            // answerList = JSON.parse(localStorage.getItem(storageKey)) || []
        } catch (error) { }


        let newListData = [].concat(answerList)

        document.querySelectorAll('.rightanswer').forEach?.((el, index) => {
            console.log(el.innerText);

            newListData.push(el.innerText)
        })

        localStorage.setItem(storageKey, JSON.stringify(newListData))

        setTimeout(() => {
            fetch("https://moodle.syxy.ouchn.cn/mod/quiz/startattempt.php", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                    "cache-control": "max-age=0",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1"
                },
                "referrer": `https://moodle.syxy.ouchn.cn/mod/quiz/attempt.php?attempt=${getSearchQuery('attempt')}cmid=${cmid}`,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `cmid=${cmid}&sesskey=${sessionKey}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })

            window.open(`https://moodle.syxy.ouchn.cn/mod/quiz/attempt.php?attempt=${getSearchQuery('attempt')}cmid=${cmid}`)
        }, 600)
    }

    getAnswer()
})();