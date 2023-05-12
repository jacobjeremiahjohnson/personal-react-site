import React from "react"
import files from "../../assets/images/projects/korean-minesweeper.png"
import "../../assets/styles/KoreanMinesweeper.css"

export default function KoreanMinesweeper(){
    return (
        <div className="project">
            <div className="komine">
                <div className="komine--header">
                    Korean Minesweeper - F2 for Settings - F3 for New Game
                </div>
                <div className="komine--body">
                    <div className="komine--body-title">
                        Mines: 0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; Korean Minesweeper
                    </div>
                    <div className="komine--body-map">

                    </div>
                </div>
            </div>

            <div className="project--desc"> 
                <div className="project--git">
                        <a href="https://github.com/jacobjeremiahjohnson/Korean-Minesweeper">Korean Minesweeper</a>
                    <div className="komine--body-code">
                        <div className="komine--body-code-animated">
                           100% Java - Graphics with JavaFX
                        </div>
                        
                    </div>
                </div>

                <div className="project--desc--body">
                        A simple twist on the classic Minesweeper game coded in pure Java. Instead of numbers, the game displays the Korean word for the number. As a bonus, flags appear as the Korean word for "flag" as opposed to an icon. I made this for my CSC 210 final.
                </div>
            </div>
        </div>
    )
}