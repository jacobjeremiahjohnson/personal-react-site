import React from "react"
import KoreanMinesweeper from "./projects/KoreanMinesweeper.js"
import DelaWhere from "./projects/DelaWhere.js"
import "../assets/styles/Projects.css"


export default function Projects(){

    return (
        <main id="projects" className="projects">
            <div className="projects--title">
                <div className="animated--title">
                    Projects
                </div>
            </div>
            <div className="projects--body">
                <KoreanMinesweeper />
                <DelaWhere />
            </div>
        </main>
    )
}