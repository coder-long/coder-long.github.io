(function ($, AOS) {

  $('.card-widget:not(#card-toc),.recent-post-item')
    .attr('data-aos', 'fade-up')
    .attr('data-aos-duration', '3001');


  AOS.init();

})(jQuery, AOS)