//Slider options
const windowInnerWidth = window.innerWidth
$('.slider').slick({
  arrows: false,
  adaptiveHeight: false,
  slidesToScroll: 1,
  speed: 7000,
  easing: 'linear',
  autoplay: true,
  autoplaySpeed: 0,
  pauseOnFocus: false,
  pauseOnHover: false
});