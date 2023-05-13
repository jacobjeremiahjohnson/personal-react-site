import React from "react"
import gif from "../assets/images/kirby.gif"
import "../assets/styles/About.css"

export default function About(){

    function updateContent(){
        var text = "Hi, I'm Jacob Johnson, comp sci student at Deltech transferring the UD in 2024. This is my personal website, used to showcase some of my projects and experiment with web design. Right now, it's made using React. (WIP)."
        var i = 0
        var speed = 7
        const doc = document.getElementById("about--content")

        function typeWriter(){
            if (i < text.length){
                let currentSpeed = speed
                doc.innerHTML += text.charAt(i)
                if (text.charAt(i) === "."){
                    currentSpeed = speed * 10
                }
                i++
                setTimeout(typeWriter, currentSpeed)
            }
        }
        typeWriter()
    }

    React.useEffect(() => {
        updateContent()
    })

    return (
        <main className="about">
            <div className="about--title hollow">About</div>
            <div id="about--content" className="about--content">
            </div>
            <div className="about--image">
                <img src={gif}/>
            </div>
        </main>
    )
}
