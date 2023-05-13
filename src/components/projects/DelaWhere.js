import React from "react"
import "../../assets/styles/DelaWhere.css"

export default function DelaWhere(){

    return (
        <div className="project">
            <div className="website">
                <div className="left-side">
                    
                </div>
                <div className="parallelogram">
                    <div className="par1">
                    </div>
                    <div className="pad">
                    </div>
                    <div className="par2">
                    </div>
                </div>
                <div className="right-side">
                </div>
                
            </div>

            <div className="project--desc"> 
                <div className="project--git">
                        <a href="https://github.com/jacobjeremiahjohnson/HackathonWebServer">Webserver</a>
                    <div className="website--body-code">
                        <div className="website--body-code-animated">
                           100% Java - Made with HTTPServer Java Library
                        </div>
                        
                    </div>
                </div>

                <div className="project--desc--body">
                        Fully functional webserver that can process read and write API calls. Also included was a simple database (txt file) to persist all data. This was used in conjuction with the DelaWhere? UD Hackathon game.
                </div>
            </div>
        </div>
    )
}