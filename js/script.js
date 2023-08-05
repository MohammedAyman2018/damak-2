
$(document).ready(function () {
  AOS.init();
  const input = document.querySelector("#phone");
  const input2 = document.querySelector("[data-sa='phone-plugin']");
  window.intlTelInput(input);
  window.intlTelInput(input2);

  $('.projects-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  }); 

});