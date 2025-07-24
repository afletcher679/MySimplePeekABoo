import {getRandomInt} from './commonUtils.js';

const animalImageUrls = ['../images/animals/tiger.png',
    '../images/animals/elephant.png',
    '../images/animals/giraffe.png',
    '../images/animals/lion.png',
    '../images/animals/panda.png',
    '../images/animals/monkey.png',
    '../images/animals/zebra.png'];

let previousAnimal = null;
export function setRandomAnimalImage(animalDiv) {
    animalDiv.appendChild(document.createElement('img'));
    animalDiv.img = animalDiv.querySelector('img');
    let imageUrlsCopy = [...animalImageUrls];
    if (previousAnimal) {
        imageUrlsCopy = imageUrlsCopy.filter(url => url !== previousAnimal);
    }
    animalDiv.img.src = imageUrlsCopy[getRandomInt(imageUrlsCopy.length)];
    hideAnimalImage(animalDiv);
}

export function showAnimalImage(animalDiv) {
    animalDiv.img.className = 'animal';
}

export function hideAnimalImage(animalDiv) {
    animalDiv.img.className = 'hide';
}