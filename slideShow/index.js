
$(document).ready(() => {
    setInterval(function () {
        $('.header > div:first')
            .fadeIn(2000)
            .fadeOut(0)
            .next(0)
            .fadeIn(200)
            .end(50000)
            .appendTo('.header');
    }, 5000);
});
