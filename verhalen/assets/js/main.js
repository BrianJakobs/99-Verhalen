//Pop-up overlay filter
document.querySelector("main>aside>button").addEventListener("click", function () {
    'use strict';
    document.querySelector("main aside form").classList.add("visible");
});

//Haalt de "buttonActive" van alle li.
function resetButtons() {
    'use strict';
    document.querySelectorAll("main>aside>nav>ul>li").forEach(function (li) {
        li.classList.remove("buttonActive");
    });
}

//Tabbladen links
document.querySelector("main>aside>nav>ul>li:last-of-type>button").addEventListener("click", function () {
    'use strict';
    resetButtons();
    this.parentElement.classList.add("buttonActive");
    document.querySelector("main>div>div").classList.add("moveLeft");
});

//Tabbladen Rechts
document.querySelector("main>aside>nav>ul>li:first-of-type>button").addEventListener("click", function () {
    'use strict';
    resetButtons();
    this.parentElement.classList.add("buttonActive");
    document.querySelector("main>div>div").classList.remove("moveLeft");
});

//Random cover verhaal
document.querySelector("main>div:first-of-type").addEventListener("onload", function () {
    'use strict';

    var backgrounds = ["assets/images/thumbnails/thumbnail-bejaard.jpg", "assets/images/thumbnails/thumbnail-hardboiled.jpg", "assets/images/thumbnails/thumbnail-moe.jpg"],
        selectBg = backgrounds[Math.floor(Math.random() * 3)];

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


//Search bar animatie
document.querySelector("header>nav>ul>li>form>button").addEventListener("click", function () {
    'use strict';
    event.preventDefault();
    document.querySelector("header").classList.toggle("fullWidth");
});