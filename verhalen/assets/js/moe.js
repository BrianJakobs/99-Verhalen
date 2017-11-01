//Vallende letters
class Letter {
    constructor() {
        this.id = document.createElement("DIV");
        this.id.classList.add("letter");
        document.body.appendChild(this.id);
        this.setup();
    }
    update() {
        this.offset = document.querySelector("html").scrollTop;
    }

    setup() {
        this.top = this.offset - Math.floor(Math.random() * window.innerHeight);
        this.left = Math.floor(Math.random() * window.innerWidth - 100);
        this.speed = 1.2 + Math.random() * 1;
        this.id.style.transform = "scale(" + this.speed + ")";
        this.type = Math.floor(Math.random() * 10) + 1;
        this.id.style.backgroundImage = "url(assets/images/letters/letter-" + this.type + ".png)";
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

const letters = [];

function setup(aantal) {
    for (let i = 0; i < aantal; i += 1) {
        letters[i] = new Letter();
    }
}

function update() {
    letters.forEach(function (letter) {
        letter.move();
        letter.display();
        letter.update();
    });
}

setup(30);
setInterval(update, 1000 / 60);