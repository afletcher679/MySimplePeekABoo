import './commonUtils'

const leafImageUrls = ['../images/leaf-1.png',
    '../images/leaf-2.png',
    '../images/leaf-3.png',
    '../images/leaf-4.png',
    '../images/tropical-1.png',
    '../images/tropical-2.png'];

const leafClasses = ['leaf', 'leaf tilt', 'leaf jump'];
const totalLeafRows = 4;

function getRandomSubsetFromArray(array) {
    const count = 5; // Number of  to return
    const arrayCopy = [...array]; // clone the array to avoid mutation
    return arrayCopy.slice(0, count); // return first `count` items
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

function createRowsOfLeaves(imageGalleryElement) {
    let leafRowStartTopPixel = -12;
    
    for (let rowNumber = 0; rowNumber < totalLeafRows; rowNumber++) {
        const row = document.createElement('div'); // Create a new <div> for each row  

        row.id = `row-${rowNumber + 1}`; // Set an ID for the row

        const shuffledLeafImageUrls = shuffleImages(); // Shuffle the images for randomness

        let leftPixel = 50;

        for (let currentLeafNumber = 0; currentLeafNumber < shuffledLeafImageUrls.length; currentLeafNumber++) {

            const img = document.createElement('img'); // Create a new <img> element

            img.src = shuffledLeafImageUrls[currentLeafNumber];                   // Set the source of the image
            img.alt = `Image ${currentLeafNumber + 1}`;               // Set alternative text for accessibility
            img.className = leafClasses[getRandomInt(leafClasses.length)]; // Assign a random class to the image for styling
            img.style.top = `${leafRowStartTopPixel}px`;          // Set the top position of the image
            img.style.left = `${leftPixel}px`;        // Set the left position of the image

            leftPixel += 120;                           // Increment the left position for the next image

            row.appendChild(img);            // Append the image to the container
        }
        leafRowStartTopPixel += 110;

        imageGalleryElement.appendChild(row);             // Append the row to the gallery
    }
}