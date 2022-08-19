$(document).ready(function () {
  setTimeout(function () {

    k = 200
    i = 150

    setTimeout(function () {
      $("#navbar-brand").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * -30 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);

    k += i

    setTimeout(function () {
      $("#me-menu").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * -30 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);
    k += i

    setTimeout(function () {
      $("#experience-menu").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * -30 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);
    k += i

    setTimeout(function () {
      $("#projects-menu").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * -30 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);
    k += i

    setTimeout(function () {
      $("#contact-menu").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * -30 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);
    k += i

    setTimeout(function () {
      $(".first-line").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * 50 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);
    k += i

    setTimeout(function () {
      $(".second-line").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * 50 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);
    k += i

    setTimeout(function () {
      $(".third-line").animate(
        { opacity: "1" },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateY(" + (1 - now) * 50 + "px)"); //
          },
          duration: "normal",
        },
        "linear"
      );
    }, k);
    k += i


    setTimeout(function () {
        $(".fourth-line").animate(
          { opacity: "1" },
          {
            step: function (now, fx) {
              $(this).css("transform", "translateY(" + (1 - now) * 50 + "px)"); //
            },
            duration: "normal",
          },
          "linear"
        );
      }, k);
      k += i

      setTimeout(function () {
        $(".right-bar").animate(
          { opacity: "1" },
          {
            step: function (now, fx) {
              $(this).css("transform", "translateY(" + (1 - now) * 50 + "px)"); //
            },
            duration: "normal",
          },
          "linear"
        );
        $(".left-bar").animate(
          { opacity: "1" },
          {
            step: function (now, fx) {
              $(this).css("transform", "translateY(" + (1 - now) * 50 + "px)"); //
            },
            duration: "normal",
          },
          "linear"
        );
      }, k);
      k += i

  }, 1500); // Set delay to 1500 to sync with other animations

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".fade-in").each(function (i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate(
          { opacity: "1" },
          {
            step: function (now, fx) {
              $(this).css("transform", "translateY(" + (1 - now) * 50 + "px)"); //
            },
            duration: "slow",
          },
          "linear"
        );
      }
    });
  });
});
