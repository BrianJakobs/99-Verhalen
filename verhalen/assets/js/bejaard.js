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