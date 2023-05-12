import React from "react"
import Mode from "./Mode.js"
import { NavLink } from "react-router-dom"

export default function Navbar(){

    return (
        <div>
            <div className="navbar">
                <div className="navbar--list">
                    <NavLink
                    to="personal-react-site/" >
                        <div>Home</div>
                    </NavLink>
                    <NavLink to="personal-react-site/about">
                        <div>About</div>
                    </NavLink>
                    <NavLink to="personal-react-site/projects">
                        <div>Projects</div>
                    </NavLink>
                    <NavLink to="personal-react-site/resume">
                        <div>Resume</div>
                    </NavLink>
                </div>

                <Mode />
            </div>
        </div>
    )
}