//This is the root React component, where the actual UI starts & where wwe build out the component tree
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import resetIcon from './assets/reset.png';
import leafCluster from './assets/leaves/monstera_leaves_cluster.png';
function App() {

  return (
    <>
        <div className={"left-right-leaf-clusters-container"}>
            <img src={leafCluster} alt="Leaf Clusters" className={"left-right-leaf-clusters left"}/>
            <img src={leafCluster} alt="Leaf Clusters" className={"left-right-leaf-clusters"}/>
        </div>
        <div className={"pt-1 flex-container"}>
            <button className={"peek-a-boo-button p-1"}>Peek-A-Boo!</button>
        <button className={"reset-button"}>
            <img src={resetIcon} alt="Reset Icon" className={"reset-icon"} />
        </button>
        </div>
    </>
  )
}

export default App
