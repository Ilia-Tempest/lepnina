$('.portfolio-block').slick({
  centerMode: true,
  slidesToShow: 1,
  focusOnSelect: true,
  centerPadding: '60px',
  arrows: false,
  variableWidth: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        variableWidth: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ]
});

