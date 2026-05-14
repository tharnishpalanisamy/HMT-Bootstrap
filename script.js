

const carousel = document.getElementById("watchCarousel");

document.querySelector(".right-btn").addEventListener("click", () => {

    carousel.scrollBy({
        left: 300,
        behavior: "smooth"
    });

});

document.querySelector(".left-btn").addEventListener("click", () => {

    carousel.scrollBy({
        left: -300,
        behavior: "smooth"
    });

});

const secondCarousel = document.getElementById("secondWatchCarousel");

document.querySelector(".second-right-btn")
.addEventListener("click", () => {

    secondCarousel.scrollBy({
        left: 300,
        behavior: "smooth"
    });

});

document.querySelector(".second-left-btn")
.addEventListener("click", () => {

    secondCarousel.scrollBy({
        left: -300,
        behavior: "smooth"
    });

});

