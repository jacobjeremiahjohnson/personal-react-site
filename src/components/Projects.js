import React from "react"
import KoreanMinesweeper from "./projects/KoreanMinesweeper"
import PersonalSite from "./projects/PersonalSite"



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
            </div>
        </main>
    )
}