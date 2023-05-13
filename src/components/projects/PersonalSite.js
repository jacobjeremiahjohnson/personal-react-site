import React from "react"
import "../../assets/styles/PersonalSite.css"

export default function PersonalSite(){
    return (
        <div className="project">
            <div className="website">
                <div className="website--header">
                    Korean Minesweeper - F2 for Settings - F3 for New Game
                </div>
                <div className="website--body">
                    <div className="website--body-title">
                        Mines: 0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; Korean Minesweeper
                    </div>
                    <div className="komine--body-map">

                    </div>
                </div>
            </div>

            <div className="project--desc"> 
                <div className="project--git">
                        <a href="https://github.com/jacobjeremiahjohnson/Korean-Minesweeper">Personal Website</a>
                    <div className="website--body-code">
                        <div className="website--body-code-animated">
                           HTML 10% - CSS 30% - JavaScript 60% - Made with React
                        </div>
                        
                    </div>
                </div>

                <div className="project--desc--body">
                        A simple twist on the classic Minesweeper game coded in pure Java. Instead of traditional digits, the game displays the Korean word for the number. As a bonus, flags appear as the Korean word for "flag" as opposed to an icon. I made this for my CSC 210 final.
                </div>
            </div>
        </div>
    )
}