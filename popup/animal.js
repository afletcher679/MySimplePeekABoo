import {getRandomInt} from './commonUtils.js';

const animalImageUrls = ['../images/animals/tiger.png',
    '../images/animals/elephant.png',
    '../images/animals/giraffe.png',
    '../images/animals/lion.png',
    '../images/animals/panda.png',
    '../images/animals/monkey.png',
    '../images/animals/zebra.png'];
const animalDiv = document.getElementById('animal-image');
let previousAnimal = null;
export function setRandomAnimalImage() {
    animalDiv.appendChild(document.createElement('img'));
    animalDiv.img = animalDiv.querySelector('img');
    let imageUrlsCopy = [...animalImageUrls];
    if (previousAnimal) {
        imageUrlsCopy = imageUrlsCopy.filter(url => url !== previousAnimal);
    }
    animalDiv.img.src = imageUrlsCopy[getRandomInt(imageUrlsCopy.length)];
    hideAnimalImage(animalDiv);
}

export function showAnimalImage() {
    animalDiv.img.className = 'animal';
}

export function hideAnimalImage() {
    animalDiv.img.className = 'hide';
}