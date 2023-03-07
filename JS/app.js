$(document).ready(function () {
  //Slider options
  const windowInnerWidth = window.innerWidth
  $('.memories__slider').slick({
    arrows: false,
    infinite: false,
    adaptiveHeight: false,
    slidesToScroll: 1,
    speed: 500,
    easing: 'linear',
    autoplay: false,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  //Drop wishes
  const accrodeonWishes = document.querySelectorAll('.wishes__item-button')
  accrodeonWishes.forEach(wish => {
    wish.addEventListener('click', () => {
      const wishContent = wish.nextElementSibling
      if (wishContent.style.maxHeight) {
        document.querySelectorAll('.wishes__item-content').forEach( content => {
          content.style.maxHeight = null
        })
      } else {
        document.querySelectorAll('.wishes__item-content').forEach( content => {
          content.style.maxHeight = null
        })
        wishContent.style.maxHeight = wishContent.scrollHeight + 'px'
      }
    })
  });
  //FullScreen scroll
  const homeHeight = document.getElementById('home').offsetHeight
  const memHeight = document.getElementById('memories').offsetHeight
  const wishHeight = document.getElementById('wishes').offsetHeight

  const homePosition = 0
  const memPosition = homeHeight
  const wishPosition =  memPosition + memHeight

  $(document).on('wheel', function (e) {
    const currentHeight = window.scrollY;
    if (currentHeight < memPosition && e.originalEvent.wheelDelta <= 0) {
      window.scrollTo(0, memPosition)
    } else if (currentHeight < wishPosition && currentHeight > homePosition && e.originalEvent.wheelDelta <= 0) {
      window.scrollTo(0, wishPosition)
    } 
    if (currentHeight > memPosition && currentHeight <= wishPosition && e.originalEvent.wheelDelta >= 0) {
      window.scrollTo(0, memPosition)
    } else if (currentHeight > homePosition && currentHeight < wishPosition && e.originalEvent.wheelDelta >= 0) {
      window.scrollTo(0, homePosition)
    }
  });
});