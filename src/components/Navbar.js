import React from "react"
import Title from "./Title.js"

export default function Navbar(){
    return (
        <div className="navbar">
            <ul className="navbar--list">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Portfolio</li>
            </ul>
        </div>
    )
}