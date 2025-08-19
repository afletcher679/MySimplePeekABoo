import {tryFilterOutArrayItem, getRandomInt} from "./commonUtils.js";
import './LeafRows.css';
import leaf1 from './assets/leaves/leaf-1.png';
import leaf2 from './assets/leaves/leaf-2.png';
import leaf3 from './assets/leaves/leaf-3.png';
import leaf4 from './assets/leaves/leaf-4.png';
import tropical1 from './assets/leaves/tropical-1.png';
import tropical2 from './assets/leaves/tropical-2.png';
import React, {forwardRef, useEffect, useMemo, useState} from "react";

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

const Leaf = forwardRef(({ imageUrl, altName, leafClass, topPixel, leftPixel }, ref) => (
    <img
        ref={ref}
        src={imageUrl}
        alt={altName}
        className={leafClass}
        style={{ top: topPixel, left: leftPixel}}
    />
));

function LeafRow({topPixel, leafRefs}) {
    const leaves = useMemo(() => {
        const rowLeaves = [];
        const shuffledImages = shuffleImages(); // Shuffle the images for randomness
        let previousLeafClass = null;
        let leafLeftPixel = -15;
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
                    ref={leafRefs[index]}
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

function RowsOfLeaves({action}) {
    const totalRows = 4;
    const leavesPerRow = 5;
    const spacing = 120;
    const topStart = -15;
    // Create refs: 2D array, one array per row
    const rowRefs = useMemo(() =>
        Array.from({ length: totalRows }, () =>
            Array.from({ length: leavesPerRow }, () => React.createRef())
        ), []
    );
    useEffect(() => {
        if (!action || !animations[action]) return;

        animations[action].forEach(anim => {
            const rowIndex = (anim.row ?? 0); // 0-based, default to all rows
            const targetRows = anim.row !== undefined ? [anim.row - 1] : [0, 1, 2, 3];

            targetRows.forEach(r => {
                const ref = rowRefs[r]?.[anim.index];
                if (ref?.current) {
                    ref.current.animate(
                        [{ transform: anim.transform }],
                        { duration: 500, fill: 'forwards' }
                    );
                }
            });
        });
    }, [action, rowRefs]);

    return (
        <div className="leaf-container">
            {[...Array(totalRows)].map((_, rowIndex) => (
                <div key={rowIndex} className="leaf-row" id={`row-${rowIndex + 1}`}>
                    <LeafRow
                        topPixel={topStart + (spacing * rowIndex)}
                        leafRefs={rowRefs[rowIndex]}
                    />
                </div>
            ))}
        </div>
    );
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

export default RowsOfLeaves