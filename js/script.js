
$(document).ready(function () {
  AOS.init();
  const input = document.querySelector("#phone");
  const input2 = document.querySelector("[data-sa='phone-plugin']");
  window.intlTelInput(input);
  input2 && window.intlTelInput(input2);

  $('.projects-slider').slick({
    infinite: false,
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

  const form1 = document.getElementById('contactUsForm');
  const form2 = document.getElementById('saleModel');

  form1 && form1.addEventListener("submit", (e) => submitForm(e, form1));
  form2.addEventListener("submit", (e) => submitForm(e, form2));


});

function submitForm(e, form) {
  e.preventDefault();
  const data = new FormData(form);
  const action = e.target.action;
  fetch(action, {
    method: 'POST',
    body: data,
  })
    .then(() => {
      alert("Success!");
      form.reset()
    })
}