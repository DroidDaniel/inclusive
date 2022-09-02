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

$(document).ready(function () {
  bannerslideronclick();
  bannerslider();
});

var $slider = $(".carosel-wrap");
wbanner = $slider.css("width");
var $SlideContainer = $slider.find(".carosel-container");
var $Slides = $SlideContainer.find(".carosel");
var currentSlide = 0;
var click = true;

//function animate on clickrightarrow
function bannerslideronclick() {
  var $Slides = $SlideContainer.find(".carosel");
  $slideRight = $(".switch-button a");
  $slideRight.on("click", function (e) {
    e.preventDefault();

    var active = $(this).index();
    console.log(parseInt(wbanner) * parseInt(active));
    //console.log(active);

    $(this).addClass("active").siblings().removeClass("active");
    if (click) {
      click = false;
      stopSlider();
      slidertime = 6000;
      callstartslider();
      //currentSlide++;
      currentSlide = $(this).index();
      console.log(currentSlide);
      //currentSlide%=$Slides.length;
      //currentSlide%=$Slides.length;
      $SlideContainer.animate(
        { marginLeft: "-" + parseInt(wbanner) * parseInt(active) },
        1000,
        function () {
          click = true;
        }
      );
    }
  });
}

// function Banner animation with out click

var Interval;

function bannerslider() {
  $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);
  startSlider();
}

var slidertime = 6000;
function startSlider() {
  Interval = setInterval(function () {
    //leftbanclick=false;
    click = false;
    currentSlide++;
    console.log(currentSlide);
    console.log(parseInt(wbanner) * parseInt(currentSlide));

    if (currentSlide == $Slides.length) {
      $slideRight.eq(0).addClass("active").siblings().removeClass("active");
    } else {
      $slideRight
        .eq(currentSlide)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }

    currentSlide %= $Slides.length;
    currentSlide %= $Slides.length;

    //console.log("slidertime:"+slidertime);
    $SlideContainer.animate(
      { marginLeft: "-" + parseInt(wbanner) * parseInt(currentSlide) },
      1000,
      function () {
        click = true;
      }
    );
    if (currentSlide == 0) {
      currentSlide = 0;
      stopSlider();
      slidertime = 6000;
      callstartslider();
    } else if (currentSlide != 0 && slidertime == 6000) {
      stopSlider();
      slidertime = 6000;
      callstartslider();
    }
  }, slidertime);
}
function callstartslider() {
  startSlider();
}
function stopSlider() {
  clearInterval(Interval);
}
