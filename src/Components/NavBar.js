import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({setIsLoggedIn}) => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        setIsLoggedIn(false)
        navigate('/login')
    }
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/fixtures'>Fixtures</Link>
            <Link to='/players'>Players</Link>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default NavBar