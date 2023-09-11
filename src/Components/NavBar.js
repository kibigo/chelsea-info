import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/fixtures'>Fixtures</Link>
        </div>
    )
}

export default NavBar