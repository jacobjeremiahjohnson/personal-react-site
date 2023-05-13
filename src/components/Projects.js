import React from "react"
import KoreanMinesweeper from "./projects/KoreanMinesweeper.js"
import PersonalSite from "./projects/PersonalSite.js"
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
                <PersonalSite />
            </div>
        </main>
    )
}