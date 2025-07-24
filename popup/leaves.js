import {getRandomInt} from "./commonUtils.js";

const leafImageUrls = ['../images/leaves/leaf-1.png',
    '../images/leaves/leaf-2.png',
    '../images/leaves/leaf-3.png',
    '../images/leaves/leaf-4.png',
    '../images/leaves/tropical-1.png',
    '../images/leaves/tropical-2.png'];

const leafClasses = ['leaf', 'leaf tilt', 'leaf jump'];
const totalLeafRows = 4;

function getRandomSubsetFromArray(array) {
    const count = 5; // Number of images to return
    const arrayCopy = [...array]; 
    return arrayCopy.slice(0, count); 
}

function shuffleImages() {
    const imageArray = getRandomSubsetFromArray(leafImageUrls); // Get a random subset of images
    for (let imageNumber = imageArray.length - 1; imageNumber > 0; imageNumber--) {
        const randomImageNumber = getRandomInt(imageNumber + 1);
        [imageArray[imageNumber], imageArray[randomImageNumber]] =
            [imageArray[randomImageNumber], imageArray[imageNumber]]; //swap elements
    }
    return imageArray;
}

export function createRowsOfLeaves(imageGalleryElement) {
    let leafRowTopPixel = -12;
    let previousLeafClass = null;
    for (let rowNumber = 0; rowNumber < totalLeafRows; rowNumber++) {
       
        const row = document.createElement('div'); // Create a new <div> for each row
       
        row.id = `row-${rowNumber + 1}`; // Set an ID for the row

        const shuffledLeafImageUrls = shuffleImages(); // Shuffle the images for randomness

        let leafRowLeftPixel = 50;

        for (let currentLeaf = 0; currentLeaf < shuffledLeafImageUrls.length; currentLeaf++) {

            const img = document.createElement('img'); // Create a new <img> element
            img.src = shuffledLeafImageUrls[currentLeaf];                   // Set the source of the image
            img.alt = `Leaf ${currentLeaf + 1}`;               // Set alternative text for accessibility
            
            let leafClassesCopy = [...leafClasses]; // Create a copy of the leaf classes array
            if(previousLeafClass) {
                leafClassesCopy = leafClassesCopy.filter(leafClass => leafClass !== previousLeafClass)// Remove the previous class if it exists to avoid repetition
            }
            
            previousLeafClass = img.className = leafClassesCopy[getRandomInt(leafClassesCopy.length)]; // Assign a random class to the image for styling
            
            img.style.top = `${leafRowTopPixel}px`;          // Set the top position of the image
            img.style.left = `${leafRowLeftPixel}px`;        // Set the left position of the image

            leafRowLeftPixel += 120;                           // Increment the left position for the next image

            row.appendChild(img);            // Append the image to the container
        }
        leafRowTopPixel += 110;

        imageGalleryElement.appendChild(row);             // Append the row to the gallery
    }
}

export function animateLeaves(action) {
    // Target only row 2 and 3
    const leafRows = [document.getElementById('row-2'), document.getElementById('row-3')];

    // Define transforms for 'peek' and 'reset' actions
    const animations = {
        peek: [
            {index: 1, transform: 'translateX(-100px)'}, //shift left
            {row: 2, index: 2, transform: 'translateY(-120px)'}, //shift up for row 2
            {row: 3, index: 2, transform: 'translateY(120px)'}, //shift down for row 3
            {index: 3, transform: 'translateX(100px)'} //shift right
        ],
        reset: [
            {index: 1, transform: 'translateX(45px)'}, // shift right
            {row: 2, index: 2, transform: 'translateY(60px)'}, // shift down for row 2
            {row: 3, index: 2, transform: 'translateY(-60px)'}, // shift up for row 3
            {index: 3, transform: 'translateX(-45px)'} //right
        ]
    };

    // Apply animation to matching leaf images
    leafRows.forEach(row => {
        // For each image in the current row
        row.querySelectorAll('img').forEach((img, index) => {
            // Find the animation config for this image and row
            const animation = animations[action].find(a =>
                a.index === index && (a.row === undefined || a.row === parseInt(row.id.split('-')[1]))
            );
            // If an animation is defined for this image, apply it
            if (animation) {
                img.animate(
                    [{transform: animation.transform}],
                    {duration: 500, fill: 'forwards'}
                );
            }
        });
    });
}