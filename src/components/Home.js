import React from "react"
import Title from "./Title.js"

export default function Home(){

    var contentArray = ["...nearly a fullstack developer", "...professional gamer", "...jpmorgan chase intern", "...royal farms cashier", "...piano guy", "...na's last hope", "...computer science student", "...lorem ipsum dolor", "........................................", "...proud delawarean", "...music fan", "...cool guy"]

    var conArrLen = contentArray.length

    function getNewText(currentText){

        while(true){

            let newText = contentArray[Math.floor(Math.random()*conArrLen)]

            if (newText === currentText){
                continue
            } else {
                return newText
            }
        }
    }

    function updateContent(e){
        var i = 0;
        var speed = 30;
        var text = getNewText(e.target.innerHTML)

        e.target.innerHTML = " "
        e.target.className += " unclickable"

        function typeWriter(){

            if (i < text.length){
                e.target.innerHTML += text.charAt(i)
                i++
                setTimeout(typeWriter, speed)
            } else {
                e.target.className = "home--content--generated"
            }

        }

        typeWriter()
    }

    return (
        <main className="home">
            <Title />
            <div className="home--content">
                <div className="home--content--generated" onClick={updateContent}>...computer science student</div>
            </div>
        </main>
    )
}