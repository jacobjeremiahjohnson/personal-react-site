import React from "react"
import Title from "./Title.js"
import files from "../assets/images/projects/wakeupkazicon-5.png"
import {useEffect} from "react"


export default function Home(){

    var contentArray = ["...nearly a fullstack developer", "...professional gamer", "...jpmorgan chase intern", "...royal farms cashier", "...na's last hope", "...computer science student", "...lorem ipsum dolor", "........................................", "...proud delawarean", "...music fan", "...cool guy", 
    "...kinda nice at ping pong", "...freestyle rapper", "...skeuomorphism enjoyer", "...5' 11'' medium build", 
    "...organ donor", "...proud techhead", "...former redditor", "...gold support main", "...(type 'kaz' for a surprise)"]

    var conArrLen = contentArray.length

    var oldNumber = 5

    function getNewText(){
        while(true){
            let newNum = Math.floor(Math.random()*conArrLen)
            if (oldNumber == newNum){
                continue
            } else {
                oldNumber = newNum
                return contentArray[newNum]
            }
        }
    }

    function updateContent(e){
        var i = 0;
        var speed = 30;
        var text = getNewText()

        e.target.innerHTML = " "
        e.target.className += " unclickable"

        function typeWriter(){
            if (i < text.length){
                let currentSpeed = speed
                e.target.innerHTML += text.charAt(i)
                i++
                setTimeout(typeWriter, currentSpeed)
            } else {
                e.target.className = "home--content--generated"
            }
        }
        typeWriter()
    }

    function firstContent(){
        var i = 0
        var speed = 30
        var text = "...computer science student"

        const doc = document.getElementById("gen")
        doc.innerHTML = " "
        doc.className += " unclickable"

        function typeWriter(){
            if (i < text.length){
                doc.innerHTML += text.charAt(i)
                i++
                setTimeout(typeWriter, speed)
            } else {
                doc.className = "home--content--generated"
            }
        }
        typeWriter()
    }

    var text = []

    React.useEffect(() => {
        firstContent()
        const doc = document.getElementById("home")
                
        window.addEventListener('keydown', (event) => {
            text.push(event.key)

            console.log(text)
            
            let max = text.length
            if(text[max-1] === "z" && text[max-2] === "a" && text[max-3] === "k"){
                console.log("Sdflkj")
                document.getElementsByTagName("MAIN")[0].style.backgroundImage = "url(" + files + ")" 
            }
        });

    }, [])


    useEffect(() =>{

    }, [])

    return (
        <main id="home" className="home">
            <Title />
            <div id="home-content" className="home--content">
                <div id="gen" className="home--content--generated" onClick={updateContent}>...computer science student</div>
            </div>
        </main>
    )
}