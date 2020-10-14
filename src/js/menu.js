$(".header-nav__part-active").click(function() {
  $(".header-nav__part").toggleClass("header-nav__part-actives");
  $(".header-nav__cursor").toggleClass("header-nav__cursor-active");
});
$(".header-nav__cursor").click(function() {
  $(".header-nav__part").toggleClass("header-nav__part-actives");
  $(".header-nav__cursor").toggleClass("header-nav__cursor-active");
});
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".header").length == 0 && $target.closest(".header-nav__part-active").length == 0) {
    $(".header-nav__part").removeClass("header-nav__part-actives");
  }
});



 $(document).ready(function() {
   var margin = 100; // переменная для контроля докрутки
   $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 1600, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});
