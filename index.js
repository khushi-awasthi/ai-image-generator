const generateImageForm = document.querySelector('.my-form');
const formInput = document.getElementById('input-value');
const imageContainerText = document.getElementById('imageContainerText');
const imageGenerated = document.getElementById('generated-image');
const imageContainer = document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        imageContainer.style.display = "block";
        imageContainerText.innerText = "Generating image...";

        const imageUrl = `https://picsum.photos/600/400?random=${Math.random()}`;

        imageGenerated.src = imageUrl;

        imageGenerated.onload = () => {
            imageContainerText.innerText = "Below is your generated image:";
        };

        imageGenerated.onerror = () => {
            imageContainerText.innerText = "Failed to load image!";
        };

    } catch (error) {
        console.log(error);
        imageContainerText.innerText = "Error generating image!";
    }
}

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredText = formInput.value.trim();

    if (enteredText !== "") {
        fetchImages(enteredText);
    } else {
        imageContainer.style.display = "block";
        imageContainerText.innerText = "Input field cannot be empty!";
    }
});