import React from "react"
import { Link } from "react-router-dom"
import '../css/Navbar.css'

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link className="navbar-branch" to='/' >Book Store</Link>
                    {/* <span className="navbar-branch">Book Store</span> */}
                </div>
                <div className="navbar-right">
                    <Link to="/books" className="navbar-link">Books</Link>
                    <Link to="/addbook" className="navbar-link">Add Book</Link>
                    <Link to="/dashboard" className="navbar-link">Dashboard</Link>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar