import React from "react"

export default function Mode() {

    function toggleMode(e){
        var currentMode = e.target.innerText
        var body = document.getElementById("root")

        var darkbg = "#000000"
        var dark = "#EC5350"
        var darksecondary = "rgb(255, 255, 255)"

        var mainbg = "rgb(255, 255, 255)"
        var main = "rgb(255, 0, 0)"
        var secondary = "rgb(0, 0, 0)"

        if (currentMode === "Light") {
            e.target.innerText = "Dark"

            body.style.setProperty("--main-bg-color", mainbg)
            body.style.setProperty("--main", main)
            body.style.setProperty("--secondary", secondary)

            body.style.setProperty("--dark-bg-color", darkbg)
            body.style.setProperty("--dark-main", dark)
            body.style.setProperty("--dark-secondary", darksecondary)

        } else if (currentMode === "Dark"){
            e.target.innerText = "Light"

            body.style.setProperty("--main-bg-color", darkbg)
            body.style.setProperty("--main", dark)
            body.style.setProperty("--secondary", darksecondary)

            body.style.setProperty("--dark-bg-color", mainbg)
            body.style.setProperty("--dark-main", main)
            body.style.setProperty("--dark-secondary", secondary)
            
        }
    }

    return (
        <div id="mode" className="mode" onClick={toggleMode}>
            Dark
        </div>
    )
}