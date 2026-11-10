// 插件初始化js
// ("AOS" in window) && AOS.init();

(function ($) {
  const settings = {
    init: function () {
      let _self = this;

      // const myModal = document.getElementById('settingModal')
      // const myInput = document.getElementById('myInput')

      // myModal.addEventListener('shown.bs.modal', () => {
      //   myInput.focus()
      // })

      _self.fontSetting();
      _self.panelButtonsClick();
      _self.backClick();
      _self.setProgressBar();
    },
    setFont: function (font) {
      cssVars({
        variables: {
          '--global-font-family': font || '',
        }
      });
    },
    fontSetting: function () {
      let _self = this;
      $('.font-list li button').on('click', function () {
        localStorage.setItem('globalFontFamily', $(this).parent('li').data('font'));
        _self.setFont($(this).parent('li').data('font'));
        $(this).parent('li').addClass("active").siblings().removeClass("active");
      });

      if (localStorage.getItem('globalFontFamily')) {
        _self.setFont(localStorage.getItem('globalFontFamily'));
        $(`[data-font='${localStorage.getItem('globalFontFamily')}']`).addClass("active").siblings().removeClass("active");
      };
    },
    panelButtonsClick: function () {
      let _self = this;
      $('#control-panel .panel-buttons > span').on('click', function () {
        $(this).parent('.panel-buttons').addClass('hide');
        $(`#control-panel .panel-back,.${$(this).data('class')}`).removeClass('hide');
      });
    },
    backClick: function () {
      let _self = this;
      $('#control-panel .panel-back .back').on('click', function () {
        $(this).parent('.panel-back').addClass('hide');
        $('.panel-hides > div').addClass('hide');
        $('.panel-buttons').removeClass('hide');
      });
    },
    setProgressBar: function () {
      const progressElement = document.querySelector('.progress-bar');

      const progressObserver = new ScrollProgress((x, y) => {
        progressElement.style.width = y * 100 + '%';
      });
    },
  };

  settings.init()

})(jQuery)