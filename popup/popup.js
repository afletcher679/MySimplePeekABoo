import {hideAnimalImage, setRandomAnimalImage, showAnimalImage} from "./animal.js";
import {createRowsOfLeaves, animateLeaves} from "./leaf.js";

const peekButton = document.getElementById('peekButton');
const resetButton = document.getElementById('resetButton');
const imageGallery = document.getElementById('image-gallery');
const animalDiv = document.getElementById('animal-image');

createRowsOfLeaves(imageGallery); // Create rows of leaves and append to the gallery
setRandomAnimalImage(animalDiv); //Set initial random animal image

function toggleButtons(isPeek) {
    peekButton.ariaDisabled = isPeek.toString();
    resetButton.ariaDisabled = (!isPeek).toString();
}

peekButton.addEventListener('click', () => {
    toggleButtons(true);
    showAnimalImage(animalDiv);
    animateLeaves('peek');
});

resetButton.addEventListener('click', () => {
    toggleButtons(false);
    hideAnimalImage(animalDiv);
    setRandomAnimalImage(animalDiv);
    animateLeaves('reset');
});