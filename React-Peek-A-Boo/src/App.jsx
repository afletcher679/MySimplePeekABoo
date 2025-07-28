//This is the root React component, where the actual UI starts & where wwe build out the component tree
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import resetIcon from './assets/reset.png';
import leafCluster from './assets/leaves/monstera_leaves_cluster.png';
import {Animal, getRandomAnimal} from "./Animal.jsx";
import {RowsOfLeaves} from "./LeafRows.jsx";

function App() {

    const [showAnimal, setShowAnimal] = useState(false);
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const handlePeekABoo = () => {
        setCurrentAnimal(previousAnimal => getRandomAnimal(previousAnimal));
        setShowAnimal(true);
    };

    const handleReset = () => {
        setShowAnimal(false);
    }

    return (
        <>
            <div className={"left-right-leaf-clusters-container"}>
                <img src={leafCluster} alt="Leaf Clusters" className={"left-right-leaf-clusters left"}/>
                <img src={leafCluster} alt="Leaf Clusters" className={"left-right-leaf-clusters"}/>
            </div>

            <div className={"d-flex top-bottom-leaf-clusters-container"}>
                <img src={leafCluster} alt="Leaf Clusters" className={"top-bottom-leaf-clusters top"}/>
                <img src={leafCluster} alt="Leaf Clusters" className={"top-bottom-leaf-clusters bottom"}/>
            </div>

            {showAnimal && <Animal animalImage={currentAnimal}/>}
            
            <RowsOfLeaves/>
            
            <div className={"pt-1 flex-container"}>
                <button className={"peek-a-boo-button p-1"} onClick={handlePeekABoo}>Peek-A-Boo!</button>
                <button className={"reset-button"}>
                    <img src={resetIcon} alt="Reset Icon" className={"reset-icon"} onClick={handleReset}/>
                </button>
            </div>
        </>
    )
}

export default App
