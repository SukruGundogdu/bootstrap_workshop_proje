let navbar = $(".navbar");
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});