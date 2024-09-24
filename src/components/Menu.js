import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Menu = () => {
    const data = useSelector((state) => state.productDetails.value);
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("authToken");

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    const handleCartNavigation = () => {
        if (isAuthenticated) {
            navigate("/cart");  
        } else {
            navigate("/login"); 
        }
    };

    return (
        <div className="container-fluid menu">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#2c3e50', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ecf0f1' }}>QuickCart</Link>
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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: '#ecf0f1', fontWeight: '500' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <span 
                                    className="nav-link" 
                                    style={{ color: '#ecf0f1', fontWeight: '500', cursor: 'pointer' }}
                                    onClick={handleCartNavigation}
                                >
                                    Cart: <span style={{ color: "#e74c3c" }}>{data.length}</span>
                                </span>
                            </li>
                            {!isAuthenticated ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login" style={{ color: '#ecf0f1', fontWeight: '500' }}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register" style={{ color: '#ecf0f1', fontWeight: '500' }}>Register</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-link nav-link" 
                                        onClick={handleLogout} 
                                        style={{ color: '#ecf0f1', fontWeight: '500' }}
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menu;
