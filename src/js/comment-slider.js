$('.comment-block').slick({
  slidesToShow: 3,
  focusOnSelect: true,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        slidesToShow: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ]
});

	