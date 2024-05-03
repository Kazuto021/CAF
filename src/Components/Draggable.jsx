import React from 'react'
import { useState } from 'react'
import "../Components/Styles/drag.scss"
const Draggable = () => {
    let sword = document.getElementsByClassName("dragable")
    // console.log(sword)
    let [currentPos1, setPos1] = useState(0)
    let [currentPos2, setPos2] = useState(0)
    let [currentPos3, setPos3] = useState(0)
    let [currentPos4, setPos4] = useState(0)

    // function dragElement(e){
    //     console.log(e)

    //     console.log(document.getElementsByClassName("hang-area"))
    // }
    const checkHover = (e) => {
        // e.preventDefault()
        console.log(e)
    }
    const dragMouseDown = (e) => {
        e = e || window.Event();
        e.preventDefault();
        setPos3(e.clientX)
        setPos4(e.clientY)
        console.log("X co-ordinate: " + currentPos3, "Y co-ordinate" + currentPos4)
        // console.log("MouseDown working")
    }
    const closeDragElement = (e) => {
        console.log("Mouse up button event bubbled ")

        // setPos1(e.clientX)
        // setPos2(e.clientY)
        // console.log("X co-ordinate after releasing: "+currentPos3,"Y co-ordinate after releasing" +currentPos4)
    }
    const elementDrag = (e) => {
        setPos1(e.clientX)
        setPos2(e.clientY)
        currentPos3
        console.log(currentPos1, currentPos2)
        sword.style.top
    }

    return (
        <div className='drag-wrapper' >
            <img src="sword.png" className='dragable' onMouseDownCapture={dragMouseDown} onMouseMove={elementDrag} onMouseUpCapture={closeDragElement} draggable="true" />

            {/* <div className='hang-area' onClick={dragElement} onMouseOverCapture={checkHover} >onMouseUpCapture={}Hanging Area</div> */}
            <div className='hang-area' onMouseOverCapture={checkHover} >Hanging Area</div>
        </div>


    )
}

export default Draggable