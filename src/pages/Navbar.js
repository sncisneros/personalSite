import React, { useState, useEffect } from "react";
import logo from './../logo.png';
import './../Navbar.css';
import { Link } from 'react-router-dom';

const Navbar=() => {
    const [sticky, setSticky] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            setSticky(window.scrollY > 135)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
      <nav className={`${sticky ? "sticky" : ""}`}>
        <div className="nav-inner">
            <p className="logo">Sasha Cisneros</p>
            <Link to="/" className="App-link" >Home</Link> <br></br>
            <Link to="/Sasha" className="App-link">Experience</Link><br></br>
            <Link to="/skills" className="App-link">Skills</Link>     
        </div>
      </nav>
    )
  };
  export default Navbar;