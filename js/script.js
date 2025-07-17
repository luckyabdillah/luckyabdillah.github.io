// (function typing() {
//     const item = document.querySelector('.stack');
//     new TypeIt(item, { 
//         lifeLike: false, 
//         loop: true,
//         speed: 0 
//     })
//         .type("S")
//         .pause(158)
//         .type("o")
//         .pause(145)
//         .type("f")
//         .pause(225)
//         .type("t")
//         .pause(230)
//         .type("w")
//         .pause(146)
//         .type("a")
//         .pause(161)
//         .type("r")
//         .pause(56)
//         .type("e")
//         .pause(163)
//         .type(" ")
//         .pause(238)
//         .type("E")
//         .pause(152)
//         .type("n")
//         .pause(86)
//         .type("g")
//         .pause(159)
//         .type("i")
//         .pause(164)
//         .type("n")
//         .pause(114)
//         .type("e")
//         .pause(156)
//         .type("e")
//         .pause(427)
//         .type("r")
//         .pause(1015)
//         .delete(1)
//         .pause(152)
//         .delete(1)
//         .pause(144)
//         .delete(1)
//         .pause(133)
//         .delete(1)
//         .pause(142)
//         .delete(1)
//         .pause(138)
//         .delete(1)
//         .pause(150)
//         .delete(1)
//         .pause(154)
//         .delete(1)
//         .pause(147)
//         .delete(1)
//         .pause(154)
//         .delete(1)
//         .pause(141)
//         .delete(1)
//         .pause(152)
//         .delete(1)
//         .pause(151)
//         .delete(1)
//         .pause(154)
//         .delete(1)
//         .pause(154)
//         .delete(1)
//         .pause(149)
//         .delete(1)
//         .pause(146)
//         .delete(1)
//         .pause(398)
//         .type("F")
//         .pause(189)
//         .type("u")
//         .pause(311)
//         .type("l")
//         .pause(141)
//         .type("l")
//         .pause(126)
//         .type("s")
//         .pause(208)
//         .type("t")
//         .pause(161)
//         .type("a")
//         .pause(143)
//         .type("c")
//         .pause(117)
//         .type("k")
//         .pause(197)
//         .type(" ")
//         .pause(201)
//         .type("W")
//         .pause(146)
//         .type("e")
//         .pause(120)
//         .type("b")
//         .pause(179)
//         .type(" ")
//         .pause(274)
//         .type("D")
//         .pause(191)
//         .type("e")
//         .pause(215)
//         .type("v")
//         .pause(93)
//         .type("e")
//         .pause(263)
//         .type("l")
//         .pause(186)
//         .type("o")
//         .pause(159)
//         .type("p")
//         .pause(118)
//         .type("e")
//         .pause(100)
//         .type("r")
//         .pause(805)
//         .delete(1)
//         .pause(152)
//         .delete(1)
//         .pause(175)
//         .delete(1)
//         .pause(139)
//         .delete(1)
//         .pause(155)
//         .delete(1)
//         .pause(157)
//         .delete(1)
//         .pause(153)
//         .delete(1)
//         .pause(151)
//         .delete(1)
//         .pause(195)
//         .delete(1)
//         .pause(133)
//         .delete(1)
//         .pause(178)
//         .delete(1)
//         .pause(138)
//         .delete(1)
//         .pause(498)
//         .delete(1)
//         .pause(147)
//         .delete(1)
//         .pause(156)
//         .delete(1)
//         .pause(160)
//         .delete(1)
//         .pause(151)
//         .delete(1)
//         .pause(146)
//         .delete(1)
//         .pause(171)
//         .delete(1)
//         .pause(129)
//         .delete(1)
//         .pause(150)
//         .delete(1)
//         .pause(139)
//         .delete(1)
//         .pause(145)
//         .delete(1)
//         .go();
// })();

$("#offcanvasNavbar a").click(function(){
    $('.offcanvas').offcanvas('hide');
});

// const resumeButton = document.querySelector('.btn-resume');
// const downloadIcon = document.querySelector('.bx-download');

// resumeButton.addEventListener('mouseenter', function() {
//     downloadIcon.classList.add('bx-tada');
// });

// resumeButton.addEventListener('mouseleave', function() {
//     downloadIcon.classList.remove('bx-tada');
// });

$(document).on('click', '.btn-show-project', function(e) {
    e.preventDefault();
    let data = JSON.parse($(this).attr('data'));
    let url = `<a href="${data.url}" target="_blank">${data.title} <i class="bx bx-link-external" style="font-size: .9rem;"></i></a>`
    $('#portfolioModalLabel').html(url);
    $('.img-project').html(`<img src="img/${data.img}" alt="${data.title}" class="img-fluid" style="border: 2px solid #2b1e17; border-radius: 15px;">`);
    $('.description').html(data.description);
    $('.visit-site').attr('href', data.url);

    let details = data.details;
    // console.log(details);
    let detail = '';
    details.forEach(item => {
        detail += `
            <li>${item}.</li>
        `
    });

    $('.details').html(detail);

    $('#portfolioModal').modal('show');
});

$('.btn-send').on('click', function (e) {
    e.preventDefault();
    let name = document.querySelector("[name='name']");
    let message = document.querySelector("[name='message']");
    
    if (name.value.length <= 0) {
        name.classList.add('is-invalid');
        $('.invalid-name').text('This field is required');
    } else {
        name.classList.remove('is-invalid');
    }
    
    if (message.value.length <= 0) {
        message.classList.add('is-invalid');
        $('.invalid-message').text('This field is required');
    } else {
        message.classList.remove('is-invalid');
    }

    if (name.value.length > 0 && message.value.length > 0) {
        let splittedMessage = message.value.split('\n');
        let modifiedMessage = '';
        if (splittedMessage.length > 1) {
            splittedMessage.forEach((message, index) => {
                if ((index + 1) == splittedMessage.length) {
                    modifiedMessage += message;
                } else {
                    modifiedMessage += `${message}%0a`;
                }
            })
        } else {
            modifiedMessage = message.value;
        }
        let url = `https://wa.me/6281283890098?text=${modifiedMessage}%0a%0a-${name.value}`;
        window.open(url);
    } else {
        document.querySelector('.is-invalid').focus();
    }
});
