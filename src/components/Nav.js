import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.js';
import About from './pages/About.js';
import Features from './pages/Features.js';
import './Nav.css'

const Nav = () => {
    return (
        <Router>
            <nav>
                <div className='navLogo'>
                    <h1>SECUREM4</h1>
                </div>
                <div className='buttonAndLink'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/About">About</Link>
                    <Link className='link' to="/Features">Features</Link>
                    <div className="wrapper">
                        <div className="icon facebook">
                            <div className="tooltip">Facebook</div>
                            <span><i className="fab fa-facebook-f"></i></span>
                        </div>
                        <div className="icon twitter">
                            <div className="tooltip">Twitter</div>
                            <span><i className="fab fa-twitter"></i></span>
                        </div>
                        <div className="icon instagram">
                            <div className="tooltip">Instagram</div>
                            <span><i className="fab fa-instagram"></i></span>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Features" element={<Features />} />
            </Routes>
        </Router>
    )
}

export default Nav
