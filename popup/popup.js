import {hideAnimalImage, setRandomAnimalImage, showAnimalImage} from "./animal.js";
import {createRowsOfLeaves, animateLeaves} from "./leaves.js";

const peekButton = document.getElementById('peekButton');
const resetButton = document.getElementById('resetButton');


createRowsOfLeaves(); // Create rows of leaves and append to the gallery
setRandomAnimalImage(); //Set initial random animal image

function toggleButtons(isPeek) {
    peekButton.ariaDisabled = isPeek.toString();
    resetButton.ariaDisabled = (!isPeek).toString();
}

peekButton.addEventListener('click', () => {
    toggleButtons(true);
    showAnimalImage();
    animateLeaves('peek');
});

resetButton.addEventListener('click', () => {
    toggleButtons(false);
    hideAnimalImage();
    setRandomAnimalImage();
    animateLeaves('reset');
});