import {getRandomInt, tryFilterOutArrayItem} from './commonUtils.js';
import './Animal.css'
import {useState} from "react";
import tiger from './assets/animals/tiger.png';
import elephant from './assets/animals/elephant.png';
import giraffe from './assets/animals/giraffe.png';
import lion from './assets/animals/lion.png';
import panda from './assets/animals/panda.png';
import monkey from './assets/animals/monkey.png';
import zebra from './assets/animals/zebra.png';

export const animalImages = [tiger, elephant, giraffe, lion, panda, monkey, zebra];

export function setRandomAnimal(currentAnimal) {
    return tryFilterOutArrayItem(animalImages, currentAnimal)[getRandomInt(animalImages.length)];
}
export function Animal() {
    return (
        <div id="animal-image" className="animal-container">
            <img src={setRandomAnimal()} alt="Animal" className={"animal"} />
        </div>
    );
}