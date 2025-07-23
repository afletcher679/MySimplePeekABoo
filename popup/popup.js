import {setRandomAnimalImage} from "./animal.js";
import {createRowsOfLeaves} from "./leaf.js";

const peekButton = document.getElementById('clickMe');
const resetButton = document.getElementById('reset');

const animalDiv = document.getElementById('animal-image');
setRandomAnimalImage(animalDiv); //Set initial random animal image

peekButton.addEventListener('click', () => {
    peekButton.ariaDisabled = "true";
    resetButton.ariaDisabled = "false";
    animalDiv.img.className = 'animal';

    const leafRow2 = document.getElementById('row-2');
    const leafRow3 = document.getElementById('row-3');
    const row2Images = leafRow2.querySelectorAll('img');
    const row3Images = leafRow3.querySelectorAll('img');

    row2Images.forEach((img, index) => {
        if (index === 1) {
            img.animate(
                [
                    {transform: 'translateX(-100px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )

        }

        if (index === 2) {
            img.animate(
                [
                    {transform: 'translateY(-120px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
        if (index === 3) {
            img.animate(
                [
                    {transform: 'translateX(100px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
    });

    row3Images.forEach((img, index) => {
        if (index === 1) {
            img.animate(
                [
                    {transform: 'translateX(-100px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )

        }

        if (index === 2) {
            img.animate(
                [
                    {transform: 'translateY(120px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
        if (index === 3) {
            img.animate(
                [
                    {transform: 'translateX(100px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
    });
});

resetButton.addEventListener('click', () => {
    resetButton.ariaDisabled = "true";
    animalDiv.img.className = 'hide';
    setRandomAnimalImage(animalDiv);

    const leafRow2 = document.getElementById('row-2');
    const leafRow3 = document.getElementById('row-3');
    const row2Images = leafRow2.querySelectorAll('img');
    const row3Images = leafRow3.querySelectorAll('img');

    row2Images.forEach((img, index) => {
        if (index === 1) {
            img.animate(
                [
                    {transform: 'translateX(45px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )

        }

        if (index === 2) {
            img.animate(
                [
                    {transform: 'translateY(60px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
        if (index === 3) {
            img.animate(
                [
                    {transform: 'translateX(-45px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
    });

    row3Images.forEach((img, index) => {
        if (index === 1) {
            img.animate(
                [
                    {transform: 'translateX(45px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )

        }

        if (index === 2) {
            img.animate(
                [
                    {transform: 'translateY(-60px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
        if (index === 3) {
            img.animate(
                [
                    {transform: 'translateX(-45px)'}
                ],
                {duration: 500, fill: 'forwards'}
            )
        }
    });
});

const imageGallery = document.getElementById('image-gallery');
createRowsOfLeaves(imageGallery); // Create rows of leaves and append to the gallery
