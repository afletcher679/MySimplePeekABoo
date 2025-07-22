const peekButton = document.getElementById('clickMe');
const resetButton = document.getElementById('reset');
const leafImageUrls = ['../images/leaf-1.png', '../images/leaf-2.png', '../images/leaf-3.png','../images/leaf-4.png', '../images/tropical-1.png', '../images/tropical-2.png'];
const leafClasses = ['leaf', 'leaf tilt', 'leaf jump'];
const animalImageUrls = ['../images/tiger.png', '../images/elephant.png', '../images/giraffe.png', '../images/lion.png', '../images/panda.png', '../images/monkey.png', '../images/zebra.png'];

const animalDiv = document.getElementById('animal-image');
animalDiv.appendChild(document.createElement('img'));
animalDiv.img = animalDiv.querySelector('img');
animalDiv.img.src = getRandomAnimal();
animalDiv.img.className = 'hide';

peekButton.addEventListener('click', () => {
    peekButton.ariaDisabled = true;
    resetButton.ariaDisabled = false;
    animalDiv.img.className = 'animal';

    const leafRow2 = document.getElementById('row-2');
    const leafRow3 = document.getElementById('row-3');
    const row2Images = leafRow2.querySelectorAll('img');
    const row3Images = leafRow3.querySelectorAll('img');

    row2Images.forEach((img, index) => {
        if (index == 1) {
            img.animate(
                [
                    {transform: 'translateX(-100px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
               
            }
        
        if( index == 2 ) {
            img.animate(
                [
                    { transform: 'translateY(-120px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
        if (index == 3) {
            img.animate(
                [
                    { transform: 'translateX(100px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
    });

    row3Images.forEach((img, index) => {
        if (index == 1) {
            img.animate(
                [
                    { transform: 'translateX(-100px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
               
            }
        
        if( index == 2 ) {
            img.animate(
                [
                    { transform: 'translateY(120px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
        if (index == 3) {
            img.animate(
                [
                    { transform: 'translateX(100px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
    });
});

resetButton.addEventListener('click', () => {
    resetButton.ariaDisabled = true;
    animalDiv.img.className = 'hide';
    animalDiv.img.src = getRandomAnimal();
    
    const leafRow2 = document.getElementById('row-2');
    const leafRow3 = document.getElementById('row-3');
    const row2Images = leafRow2.querySelectorAll('img');
    const row3Images = leafRow3.querySelectorAll('img');

    row2Images.forEach((img, index) => {
        if (index == 1) {
            img.animate(
                [
                    { transform: 'translateX(45px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
               
            }
        
        if( index == 2 ) {
            img.animate(
                [
                    { transform: 'translateY(60px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
        if (index == 3) {
            img.animate(
                [
                    {  transform: 'translateX(-45px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
    });

    row3Images.forEach((img, index) => {
        if (index == 1) {
            img.animate(
                [
                    { transform: 'translateX(45px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
               
            }
        
        if( index == 2 ) {
            img.animate(
                [
                    { transform: 'translateY(-60px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
        if (index == 3) {
            img.animate(
                [
                    { transform: 'translateX(-45px)'}
                ],
                {duration: 500, fill: 'forwards'} 
            )
        }
    });
});

function shuffleImages() {
    const imageArray = getRandomSubset(leafImageUrls); // Get a random subset of images
    for(let imageNumber = imageArray.length - 1; imageNumber > 0; imageNumber--) {
        const j = Math.floor(Math.random() * (imageNumber + 1));
        [imageArray[imageNumber], imageArray[j]] = [imageArray[j], imageArray[imageNumber]]; //swap elements
    }
    return imageArray;
}

function getRandomSubset(array) {
    const count = 5; // Number of images to return
    const shuffled = [...array]; // clone the array to avoid mutation
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap
    }
    return shuffled.slice(0, count); // return first `count` items
}

function getRandomClass() {
    const index = Math.floor(Math.random() * leafClasses.length);
    return leafClasses[index];
}
function getRandomAnimal() {
    const index = Math.floor(Math.random() * animalImageUrls.length);
    return animalImageUrls[index];
}

const imageGallery = document.getElementById('image-gallery');
const leafRows = 4;
let topPixel = -12;
for (let rowNumber = 0; rowNumber < leafRows; rowNumber++) {
    const row = document.createElement('div'); // Create a new <div> for each row  
    row.id = `row-${rowNumber+1}`; // Set an ID for the row
    const shuffledLeafImageUrls = shuffleImages(); // Shuffle the images for randomness
    let leftPixel = 50;
    for (let leafNumber = 0; leafNumber < shuffledLeafImageUrls.length; leafNumber++) {
        const img = document.createElement('img'); // Create a new <img> element
        img.src = shuffledLeafImageUrls[leafNumber];                   // Set the source of the image
        img.alt = `Image ${leafNumber + 1}`;               // Set alternative text for accessibility
        
        img.className = getRandomClass(); // Assign a random class to the image for styling 
        img.style.top = `${topPixel}px`;          // Set the top position of the image
        img.style.left = `${leftPixel}px`;        // Set the left position of the image
                                
        leftPixel += 120;                           // Increment the left position for the next image
        row.appendChild(img);            // Append the image to the container
    }
    topPixel += 110;  
    imageGallery.appendChild(row);             // Append the row to the gallery
}

