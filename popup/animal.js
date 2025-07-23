import {getRandomInt} from './commonUtils.js';

const animalImageUrls = ['../images/animals/tiger.png',
    '../images/animals/elephant.png',
    '../images/animals/giraffe.png',
    '../images/animals/lion.png',
    '../images/animals/panda.png',
    '../images/animals/monkey.png',
    '../images/animals/zebra.png'];

export function setRandomAnimalImage(animalDiv) {
    animalDiv.appendChild(document.createElement('img'));
    animalDiv.img = animalDiv.querySelector('img');
    animalDiv.img.src = animalImageUrls[getRandomInt(animalImageUrls.length)];
    hideAnimalImage(animalDiv);
}

export function showAnimalImage(animalDiv) {
    animalDiv.img.className = 'animal';
}

export function hideAnimalImage(animalDiv) {
    animalDiv.img.className = 'hide';
}