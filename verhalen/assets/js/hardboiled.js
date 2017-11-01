setInterval(function () {
    'use strict';
    document.querySelectorAll('main>img').forEach(function (img) {
        img.classList.toggle('glitch');
        setTimeout(function () {
            document.querySelector('main>img').classList.toggle('glitch');
        }, 500);
    });

}, 8000);

setInterval(function () {
    'use strict';
    document.querySelector('main>img').classList.toggle('filter');
    setTimeout(function () {
        document.querySelector('main>img').classList.toggle('filter');
    }, 600);

}, 60000);