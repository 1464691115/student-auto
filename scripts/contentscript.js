const videoDom = document.getElementsByTagName('video')[0];
const { id } = strQueryParams(location.search);

let timeout = null;

if (id) {
  if (!videoDom) {
    const isNotNextHistory = localStorage.getItem('isNextHistory');
    let isNext = !!+isNotNextHistory;
    if (isNotNextHistory === null) {
      isNext = confirm('当前页可能需要答题，是否停留?(保存选择 后续不在询问)');
      localStorage.setItem('isNextHistory', +isNext);
    }

    if (!isNext) {
      taskNextVideo();
    }
  } else {
    document.getElementsByClassName(
      'fixed-top navbar navbar-light bg-white navbar-expand moodle-has-zindex newgk-topnav'
    )[0].style.opacity = 0;

    videoDom.muted = true;
    videoDom.play?.();
    videoDom.addEventListener('ended', function () {
      taskNextVideo();
    });
    videoDom.addEventListener('pause', function () {
      this.play?.();
    });
  }
}

function strQueryParams(search = '') {
  return Object.fromEntries(new URLSearchParams(search));
}

function taskNextVideo() {
  try {
    document.getElementsByClassName('newgk-prenext newgk-next')[0].click();
  } catch (error) {
    alert('没有下一页');
  }
}
