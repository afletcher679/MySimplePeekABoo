const animalImageUrls = ['../images/tiger.png', '../images/elephant.png', '../images/giraffe.png', '../images/lion.png', '../images/panda.png', '../images/monkey.png', '../images/zebra.png'];

function setRandomAnimalImage(animalDiv) {
    animalDiv.appendChild(document.createElement('img'));
    animalDiv.img = animalDiv.querySelector('img');
    animalDiv.img.src = animalImageUrls[getRandomInt(animalImageUrls.length)];
    animalDiv.img.className = 'hide';
}
