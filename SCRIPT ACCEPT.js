// script.js
const numImages = 20; // Number of images to create
const imageSources = [
    "img/happy_cat.gif",
    "img/happy_cat.gif",
    "img/happy_cat.gif",
    // Add more image sources here
];


for (let i = 0; i < numImages; i++) {
    createFloatingImage();
}


function createFloatingImage() {
    const image = document.createElement("img");
    image.src = getRandomImageSource();
    image.classList.add("floating-image");
    document.body.appendChild(image);


    randomPosition(image);
    randomMovement(image);
}


function randomPosition(image) {
    const maxX = window.innerWidth - image.clientWidth;
    const maxY = window.innerHeight - image.clientHeight;


    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);


    image.style.left = randomX + "px";
    image.style.top = randomY + "px";
}


function randomMovement(image) {
    const randomTranslateX = Math.random() * 200 - 100; // Adjust the values for desired range and speed
    const randomTranslateY = Math.random() * 200 - 100;


    image.style.transform = `translate(${randomTranslateX}px, ${randomTranslateY}px)`;


    setTimeout(() => {
        randomMovement(image);
    }, Math.random() * 500); // Adjust the interval for changing movement
}


function getRandomImageSource() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];


}
