$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-none");
});

$("#sign-up").click(function () {
   $("#sign-up-card").toggleClass("d-none");
   $("#intro-card").toggleClass("d-none");
});

$("#lets-go").click(function () {
   $("#sign-up-card").toggleClass("d-none");
   $("#intro-card").toggleClass("d-none");
});
