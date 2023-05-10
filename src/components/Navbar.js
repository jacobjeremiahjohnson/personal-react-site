import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar(){

    function clicked(e) {
        const navbarList = e.target.parentElement.children
        for (let i = 0; i < navbarList.length; i++){
            navbarList[i].id = ""
        }
        let currentPage = e.target.innerText
        e.target.id = "selected"
        if (currentPage === "Home"){
            window.location.href = "/"
        } else {
            window.location.href = "/" + currentPage.toLowerCase()
        }
    }

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
            </div>
        </div>
    )
}