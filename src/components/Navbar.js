import React from "react"
import Mode from "./Mode.js"
import { NavLink } from "react-router-dom"

export default function Navbar(){

    return (
        <div>
            <div className="navbar">
                <div className="navbar--list">
                    <NavLink
                    to="/" >
                        <div>Home</div>
                    </NavLink>
                    <NavLink to="/about">
                        <div>About</div>
                    </NavLink>
                    <NavLink to="/projects">
                        <div>Projects</div>
                    </NavLink>
                    <NavLink to="/resume">
                        <div>Resume</div>
                    </NavLink>
                </div>

                <Mode />
            </div>
        </div>
    )
}