$(".language").hover(function () {
    // over
    $(".language__drop-down").fadeIn(200);
    $(".language").css("color", "red");
    $(".language__drop-down").css("color", "black")


}, function () {
    // out
    $(".language").css("color", "black");
    $(".language__drop-down").fadeOut(200);
}
);
$(".currency").hover(function () {
    // over
    $(".currency__drop-down").fadeIn(200);
    $(".currency").css("color", "red");
    $(".currency__drop-down").css("color", "black");
}, function () {
    // out
    $(".currency").css("color", "black");
    $(".currency__drop-down").fadeOut(200);
}
);
