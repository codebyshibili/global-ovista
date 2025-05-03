/**
 * Template Name: Traverse Holiday Theme
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Animation on scroll function and init
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 0
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
  }

  // Scroll-to-top click event with proper .on()
  $(document).on("click", ".scroll-top", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /**
   * Sticky header on scroll
   */
  /*====================================
    sticky-footer
 =====================================*/

  var header_height = $("#header").height();
  $(".main-wrapper").css({
    "margin-top": header_height,
  });

  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Navbar toggler (for mobile menu)
   */
  $(document).on("click", ".navbar-toggler", function () {
    $(".header-one").toggleClass("header-bg");
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Hero Slider
   */
  $(".hero-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "100px",
    infinite: true,
    prevArrow: $(".hero-prev"),
    nextArrow: $(".hero-next"),
    appendDots: $(".slider-dot-box"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });

  /**
   * Tour Section - Init isotope layout and filters
   */
  const isotopeContainer = $(".isotope-container");
  isotopeContainer.isotope({
    itemSelector: ".isotope-item",
    layoutMode: "fitRows",
  });

  $(document).on("click", ".tour-filters li", function () {
    $(".tour-filters li").removeClass("active");
    $(this).addClass("active");

    const selector = $(this).attr("data-filter");
    isotopeContainer.isotope({
      filter: selector,
    });
    return false;
  });

  /**
   * Read more Content
   */
  $(".moreless-button").click(function () {
    $(".moretext").slideToggle();
    if ($(".moreless-button").text() == "Read more") {
      $(this).text("Read less");
    } else {
      $(this).text("Read more");
    }
  });
  /**
   * Client Logo Slider (Swiper)
   */
  new Swiper(".client-logo-slider", {
    loop: true,
    freeMode: true,
    spaceBetween: 30,
    grabCursor: true,
    slidesPerView: 2,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    speed: 5000,
    freeModeMomentum: false,
    pagination: false,
    navigation: false,
    breakpoints: {
      1199: {
        slidesPerView: 6,
        spaceBetween: 90,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 70,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Explore Place Section - Init isotope layout and filters
   */
  $(document).on("click", ".place-filters li", function () {
    $(".place-filters li").removeClass("active");
    $(this).addClass("active");

    const selector = $(this).attr("data-filter");
    isotopeContainer.isotope({
      filter: selector,
    });
    return false;
  });

  /**
   * Counter Section
   */
  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend(
      {
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: "",
      },
      options
    );

    var thisElement = $(this);

    $({ count: settings.start }).animate(
      { count: settings.end },
      {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete,
      }
    );
  };

  $("#number1").jQuerySimpleCounter({ end: 50, duration: 3000 });
  $("#number2").jQuerySimpleCounter({ end: 900, duration: 3000 });
  $("#number3").jQuerySimpleCounter({ end: 300, duration: 3000 });
  $("#number4").jQuerySimpleCounter({ end: 3, duration: 4000 });

  /**
   * Testimonial Slider
   */
  $(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    nextArrow: $(".testimonial-next"),
    prevArrow: $(".testimonial-prev"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /**
   * Blog Slider
   */
  $(".blog-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    nextArrow: $(".blog-next"),
    prevArrow: $(".blog-prev"),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /**
   * Blog Details Slider
   */
  $(".blog-details-slider").slick({
    dots: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    infinite: true,
  });

  /**
   * Home Two - Testimonial section
   */
  $(".testimonial-two-slider").slick({
    dots: false,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    prevArrow: $(".testimonial-prev"),
    nextArrow: $(".testimonial-next"),
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
  });

  /**
   * Home Three - Testimonial section
   */
  $(".testimonial-three-slider").slick({
    dots: false,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    prevArrow: $(".testimonial-prev"),
    nextArrow: $(".testimonial-next"),
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /**
   * Destination Book Page - Our Gallery section
   */
  $(".our-gallery-slider").slick({
    dots: false,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
