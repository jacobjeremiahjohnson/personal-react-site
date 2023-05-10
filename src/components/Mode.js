import React from "react"

export default function Mode() {

    function toggleMode(e){
        var currentMode = e.target.innerText
        var body = document.body

        if (currentMode === "Dark") {
            e.target.innerText = "Light"

            body.style.setProperty("--main-bg-color", "rgb(10, 10, 10)")
            body.style.setProperty("--main", "rgb(0, 255, 255)")
            body.style.setProperty("--secondary", "rgb(255, 255, 255)")

        } else if (currentMode === "Light"){
            e.target.innerText = "Dark"

            body.style.setProperty("--main-bg-color", "rgb(255, 255, 255)")
            body.style.setProperty("--main", "rgb(255, 0, 0)")
            body.style.setProperty("--secondary", "black")
        }
    }

    return (
        <div className="mode" onClick={toggleMode}>
            Light
        </div>
        
    )
}