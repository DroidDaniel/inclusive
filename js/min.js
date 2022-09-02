$(document).ready(function () {
  $(".navmenu-toggle,.nav_menu_ul li").click(function () {
    $(".navmenu-toggle").toggleClass("open");
    $(".nav_menu_ul").toggleClass("open_menu");
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("nav").addClass("nav--colored");
    } else {
      $("nav").removeClass("nav--colored");
    }
  });
});
