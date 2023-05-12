import React from "react"

export default function Title(){
 
    function updateContent(){
        const doc = document.getElementById("title")
        var i = 0;
        var speed = 30;
        var text = "Jacob Johnson"

        function typeWriter(){
            if (i < text.length){
                doc.innerHTML += text.charAt(i)
                i++
                setTimeout(typeWriter, speed)
            }
        }
        typeWriter()
    }

    React.useEffect(() => {
        updateContent()
    })

    return (
        <div>
            <div id="title" className="title"></div>
        </div>
    )
}