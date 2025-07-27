//This is the root React component, where the actual UI starts & where wwe build out the component tree
import { useState } from 'react'
import './App.css'
import resetIcon from './assets/reset.png';
function App() {

  return (
    <>
        <div className={"flex-container"}>
            <button className={"peek-a-boo-button"}>Peek-A-Boo!</button>
        <button className={"reset-button"}>
            <img src={resetIcon} alt="Reset Icon" className={"reset-icon"} />
        </button>
        </div>
    </>
  )
}

export default App
