console.log("runing.....")
const scrollContainer = document.querySelector(".scroll-container");

window.Left = function () {
    scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

window.Right = function () {
    scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}


