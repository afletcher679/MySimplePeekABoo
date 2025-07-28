import {tryFilterOutArrayItem, getRandomInt} from "./commonUtils.js";
import './LeafRows.css';
import leaf1 from './assets/leaves/leaf-1.png';
import leaf2 from './assets/leaves/leaf-2.png';
import leaf3 from './assets/leaves/leaf-3.png';
import leaf4 from './assets/leaves/leaf-4.png';
import tropical1 from './assets/leaves/tropical-1.png';
import tropical2 from './assets/leaves/tropical-2.png';
import {useMemo} from "react";

const leafImageUrls = [leaf1, leaf2, leaf3, leaf4, tropical1, tropical2];

function shuffleImages() {
    const imageArray = leafImageUrls.slice(0, 5); 
    for (let imageNumber = imageArray.length - 1; imageNumber > 0; imageNumber--) {
        const randomImageNumber = getRandomInt(imageNumber + 1);
        [imageArray[imageNumber], imageArray[randomImageNumber]] =
            [imageArray[randomImageNumber], imageArray[imageNumber]]; //swap elements
    }
    return imageArray;
}

function getRandomLeafClass(previousLeafClass) {
    const leafClasses = ['leaf', 'leaf tilt', 'leaf jump'];
    const filtered = tryFilterOutArrayItem(leafClasses, previousLeafClass);
    const safeList = filtered.length > 0 ? filtered : leafClasses;
    return safeList[getRandomInt(safeList.length)];
}

function Leaf({imageUrl, altName, leafClass, topPixel, leftPixel}) {
    return (
        <img src={imageUrl} alt={altName} className={leafClass} style={{top: topPixel, left: leftPixel}}/>
    );
}

function LeafRow({topPixel}) {
    const leaves = useMemo(() => {
        const rowLeaves = [];
        const shuffledImages = shuffleImages(); // Shuffle the images for randomness
        let previousLeafClass = null;
        let leafLeftPixel = -10;
        for (let i = 0; i < 5; i++) {
            const leafClass = getRandomLeafClass(previousLeafClass);
            previousLeafClass = leafClass;

            rowLeaves.push({
                image: shuffledImages[i],
                className: leafClass,
                left: leafLeftPixel,
            });

            leafLeftPixel += 120;
        }

        return rowLeaves;
    }, []); // only generate once on mount

    return (
        <>
            {leaves.map((leaf, index) => (
                <Leaf
                    key={index}
                    imageUrl={leaf.image}
                    altName={`Leaf ${index + 1}`}
                    leafClass={leaf.className}
                    topPixel={`${topPixel}px`}
                    leftPixel={`${leaf.left}px`}
                />
            ))}
        </>
    );
}

export function RowsOfLeaves() {
    const totalRows = 4;
    const spacing = 120;
    const topStart = -15;

    return (
        <div className={"leaf-container"}>
            {Array.from({ length: totalRows }).map((_, rowIndex) => (
                <div key={rowIndex} id={`row-${rowIndex + 1}`} >
                    <LeafRow topPixel={topStart + (spacing * rowIndex)} />
                </div>
            ))}
        </div>
    );
}