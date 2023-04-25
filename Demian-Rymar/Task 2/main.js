const images = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg"];
const image = document.getElementById("gallery-image");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
let currentImageIndex = 0;

function showImage() {
    image.src = images[currentImageIndex];
}

function disableButton(button) {
    button.disabled = true;
    button.classList.add("disabled");
}

function enableButton(button) {
    button.disabled = false;
    button.classList.remove("disabled");
}

function checkButtons() {
    if (currentImageIndex === 0) {
        disableButton(previousButton);
    } else {
        enableButton(previousButton);
    }
    if (currentImageIndex === images.length - 1) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
}

previousButton.addEventListener("click", () => {
    currentImageIndex--;
    showImage();
    checkButtons();
});

nextButton.addEventListener("click", () => {
    currentImageIndex++;
    showImage();
    checkButtons();
});

showImage();
checkButtons();