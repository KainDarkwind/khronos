$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#save-edit-card").click(function () {
   $("#overlay-fail").toggleClass("d-flex d-none");
});

$("#sign-up").click(function () {
   $("#sign-up-card").toggleClass("d-none");
   $("#intro-card").toggleClass("d-none");
});

$("#delete-button").click(function () {
   $("#delete-calendar").toggleClass("d-none");
});

$("#remove-event-1").click(function () {
   $("#list1").toggleClass("d-none");
});

$("#remove-event-2").click(function () {
   $("#list2").toggleClass("d-none");
});

// $("#lets-go").click(function () {
//    $("#sign-up-card").toggleClass("d-none");
//    $("#intro-card").toggleClass("d-none");
// });
