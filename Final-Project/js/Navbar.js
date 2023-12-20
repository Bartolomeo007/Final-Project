import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="img/murdas_logo.png" alt="Logo" width="40" height="32" />
                    Murdas
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="../about_us.html" className="nav-link active">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../documents.html" className="nav-link">
                                Documents
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../gallery.html" className="nav-link">
                                Photo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../order.html" className="nav-link">
                                Order
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
