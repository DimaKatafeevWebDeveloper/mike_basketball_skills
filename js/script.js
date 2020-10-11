jQuery(document).ready(function ($) {
  //burger
  $(".icon-menu").on("click", function () {
    $(".icon-menu").toggleClass("active") &&
      $(".header-modal").toggleClass("show") &&
      $("body").toggleClass("lock");
  });

  //шапка
  let scrolled;
  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
      $(".icon-menu").addClass("show") && $(".header").addClass("hide");
    }
    if (100 > scrolled) {
      $(".icon-menu").removeClass("show") && $(".header").removeClass("hide");
    }
  };

  $(".banner__btn, .about__btn").on("click", function () {
    $(".popup").toggleClass("active") && $("body").toggleClass("lock");
  });

  $(".popup__icon").on("click", function () {
    $(".popup").removeClass("active") && $("body").removeClass("lock");
  });

  //анимация

  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }

  // показ картинок при hover

  $(".training01").hover(function () {
    $(".img-training01").addClass("show") &&
      $(
        ".img-training02, .img-training03, .img-training04, .img-training05"
      ).removeClass("show") &&
      $(".training01").addClass("active") &&
      $(".training02, .training03, .training04, .training05").removeClass(
        "active"
      );
  });

  $(".training02").hover(function () {
    $(".img-training02").addClass("show") &&
      $(
        ".img-training01, .img-training03, .img-training04, .img-training05"
      ).removeClass("show") &&
      $(".training02").addClass("active") &&
      $(".training01, .training03, .training04, .training05").removeClass(
        "active"
      );
  });

  $(".training03").hover(function () {
    $(".img-training03").addClass("show") &&
      $(
        ".img-training01, .img-training02, .img-training04, .img-training05"
      ).removeClass("show") &&
      $(".training03").addClass("active") &&
      $(".training01, .training02, .training04, .training05").removeClass(
        "active"
      );
  });

  $(".training04").hover(function () {
    $(".img-training04").addClass("show") &&
      $(
        ".img-training01, .img-training02, .img-training03, .img-training05"
      ).removeClass("show") &&
      $(".training04").addClass("active") &&
      $(".training01, .training03, .training02, .training05").removeClass(
        "active"
      );
  });

  $(".training05").hover(function () {
    $(".img-training05").addClass("show") &&
      $(
        ".img-training01, .img-training02, .img-training03, .img-training04"
      ).removeClass("show") &&
      $(".training05").addClass("active") &&
      $(".training01, .training03, .training04, .training02").removeClass(
        "active"
      );
  });

  //скролл

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  $(".header-modal a").on("click", function () {
    $(".icon-menu").removeClass("active") &&
      $(".header-modal").removeClass("show") &&
      $("body").removeClass("lock");
  });
});
