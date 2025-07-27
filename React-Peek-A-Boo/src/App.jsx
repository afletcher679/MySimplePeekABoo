//This is the root React component, where the actual UI starts & where wwe build out the component tree
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
        <div className={"flex-container"}>
            <button className={"peek-a-boo-button"}>Peek-A-Boo!</button>
        </div>
    </>
  )
}

export default App
