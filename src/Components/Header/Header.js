import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = ({ isActive }) => {
        return {
          color: isActive ? "red" : "",
          borderBottom: isActive ? "1px solid red":""
        };
      }
    return (
        <div className="text-center">
            <nav className="text-2xl bg-gray-300 h-12">
                <NavLink style={activeStyle} className="navbar" to="/home">Home</NavLink>
                <NavLink style={activeStyle} className="navbar" to="/reviews">Ratings</NavLink>
                <NavLink style={activeStyle} className="navbar" to="/dashboard">Dashboard</NavLink>
                <NavLink style={activeStyle} className="navbar" to="/blogs">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Header;