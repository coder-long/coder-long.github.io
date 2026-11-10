(function ($) {

  let curIndex = Number(localStorage.getItem('web_bg_idx')) ?? 0;
  let timeInterval = 1000 * 5 * 60;
  let imgArr = [
    "https://s1.ax1x.com/2023/04/05/pp5RsVe.jpg",
    "https://s1.ax1x.com/2023/04/05/pp5R1DU.jpg",
    "https://s1.ax1x.com/2023/04/05/pp5RyUH.jpg",
    "https://s1.ax1x.com/2023/04/05/pp5RgPA.jpg",
  ];

  changeImg();
  setInterval(changeImg, timeInterval);

  function changeImg() {

    let obj = document.getElementById("web_bg");

    if (!obj) {
      return;
    }

    if (curIndex > imgArr.length - 1) {
      curIndex = 0;
    }

    obj.style.backgroundImage = "URL(" + imgArr[curIndex] + ")";

    if (curIndex == imgArr.length - 1) {
      curIndex = 0;
    } else {
      curIndex += 1;
    };

    localStorage.setItem('web_bg_idx', curIndex)

  }

})(jQuery)