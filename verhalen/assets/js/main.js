//27-10-2017 vallende druppels code gemaakt met hulp van Wouter Lem.

//defineer de druppel, constructor wordt altijd uitgevoerd wanneer de druppel wordt gemaakt.

class Druppel {
    constructor() {
        this.id = document.createElement("DIV");
        this.id.classList.add("druppel");
        document.body.appendChild(this.id);
        this.setup();
    }

    update() {
        this.offset = document.querySelector("html").scrollTop;
    }

    setup() {
        this.top = this.offset - Math.floor(Math.random() * window.innerHeight);
        this.left = Math.floor(Math.random() * window.innerWidth - 100);
        this.speed = 1 + Math.random() * 1;
        this.id.style.transform = "scale(" + this.speed + ")";
        this.color = Math.floor(Math.random() * 3) + 1;
        this.id.style.backgroundImage = "url(assets/images/stories/druppel-" + this.color + ".svg)";
    }

    move() {
        if (this.isOnscreen) {
            this.top += this.speed;
        } else {
            this.setup();
        }
    }

    display() {
        this.id.style.top = this.top + "px";
        this.id.style.left = this.left + "px";
    }

    get isOnscreen() {
        return (this.top < window.innerHeight + this.offset) && (this.top > this.offset - window.innerHeight);
    }
}

//Met get voert hij de functie wel nog uit zonder haakjes.

//var waarvan de waarde gelijk blijft nadat de waarde gegeven is. Aantal staat voor de hoeveelheid druppels die ik maak, in de array druppels sla ik deze op.

const druppels = [];

function setup(aantal) {
    for (let i = 0; i < aantal; i += 1) {
        druppels[i] = new Druppel();
    }
}

function update() {
    druppels.forEach(function (druppel) {
        druppel.move();
        druppel.display();
        druppel.update();
    });
}

setup(20);
setInterval(update, 1000 / 60);

//Pop-up overlay filter
document.querySelector("main>aside>button").addEventListener("click", function () {
    'use strict';
    document.querySelector("main aside form").classList.add("visible");
});

function resetButtons() {
    document.querySelectorAll("main>aside>nav>ul>li").forEach(function (li) {
        li.classList.remove("buttonActive");
    });
}

//Tabbladen links
document.querySelector("main>aside>nav>ul>li:last-of-type>button").addEventListener("click", function () {
    'use strict';
    resetButtons();
    this.parentElement.classList.add("buttonActive");
    document.querySelector("main>div:last-of-type").classList.add("moveLeft");
});

//Tabbladen Rechts
document.querySelector("main>aside>nav>ul>li:first-of-type>button").addEventListener("click", function () {
    'use strict';
    resetButtons();
    this.parentElement.classList.add("buttonActive");
    document.querySelector("main>div:last-of-type").classList.remove("moveLeft");
});

//Random cover verhaal
document.querySelector("main>div:first-of-type").addEventListener("onload", function () {
    'use strict';

    var backgrounds = ["assets/images/thumbnails/thumbnail-bejaard.jpg", "assets/images/thumbnails/thumbnail-hardboiled.jpg", "assets/images/thumbnails/thumbnail-moe.jpg"]

    var selectBg = backgrounds[Math.floor(Math.random() * 3)];

    document.querySelector("main>div:first-of-type").style.backgroundImage = "url( + selectBg + )";
});

//Random cover verhaal
function coverImage() {
    'use strict';
    var backgrounds = ["bejaard", "hardboiled", "moe"],
        selectBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    document.querySelector("main>div:first-of-type").style.backgroundImage = "url(assets/images/thumbnails/cover-" + selectBg + ".png)";
}

coverImage();

////Juiste titel bij verhaal
//function changeTitle() {
//    'use strict';
//    if (document.querySelector("main>div:first-of-type").style.backgroundImage = "url(assets/images/thumbnails/thumbnail-bejaard.jpg)") {
//        document.querySelector("main>div:first-of-type>h1").innerHTML("Bejaard");
//    } else if (document.querySelector("main>div:first-of-type").style.backgroundImage = "url(assets/images/thumbnails/thumbnail-hardboiled.jpg)") {
//        document.querySelector("main>div:first-of-type>h1").innerHTML("Hardboiled");
//    } else if (document.querySelector("main>div:first-of-type").style.backgroundImage = "url(assets/images/thumbnails/thumbnail-moe.jpg)") {
//        document.querySelector("main>div:first-of-type>h1").innerHTML("Moe");
//    } else {
//        document.querySelector("main>div:first-of-type>h1").innerHTML("TravelStories");
//    }
//
//}
//
//changeTitle();