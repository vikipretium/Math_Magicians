import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                Math Magicians
            </h1>
            <ul>
                <li><link to = "/" ><span>Home</span></link></li>
            </ul>
        </nav>
    )
}