import React, {forwardRef} from "react";
import './Leaf.css'
import {getRandomInt, tryFilterOutArrayItem} from "./commonUtils.js";

export function getRandomLeafClass(previousLeafClass) {
    const leafClasses = ['leaf', 'leaf tilt', 'leaf jump'];
    const filtered = tryFilterOutArrayItem(leafClasses, previousLeafClass);
    const safeList = filtered.length > 0 ? filtered : leafClasses;
    return safeList[getRandomInt(safeList.length)];
}

const Leaf = forwardRef(({imageUrl, altName, leafClass, topPixel, leftPixel}, ref) => (
    <img
        ref={ref}
        src={imageUrl}
        alt={altName}
        className={leafClass}
        style={{top: topPixel, left: leftPixel}}
    />
));

export default Leaf;