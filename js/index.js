$("#menu").click(function () {
    $("#contenedormenu").toggleClass("abrirmenu");
  });
  
  $(".btn_ancla").click(function () {
    var ancla = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(ancla).offset().top,
      },
      1000
    );
    $("#contenedormenu").toggleClass("abrirmenu");
  });

  // Scroll on top

  $(".flotador").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });