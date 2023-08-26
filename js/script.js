$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

// $(document).on("click", ".btn-send", function (e) {
//     e.preventDefault();
//     let form = $("form");
//     let name = $('[name="name"]').val();
//     let message = $('[name="message"]').val();
//     form.attr("action", "https://wa.me/6281283890098?text=Hi! I'm " + name + ", " + message);
//     // console.log(form);
//     form.submit();
// });

$(document).on("keyup", "[name='name']", function (e) {
    e.preventDefault();
    let name = $("[name='name']").val();
    let message = $("[name='message']").val();
    $(".btn-send").attr("href", "https://wa.me/6281283890098?text=Hi!%20I'm%20" + name + ",%20" + message);
});

$(document).on("keyup", "[name='message']", function (e) {
    e.preventDefault();
    let name = $("[name='name']").val();
    let message = $("[name='message']").val();
    $(".btn-send").attr("href", "https://wa.me/6281283890098?text=Hi!%20I'm%20" + name + ",%20" + message);
});
