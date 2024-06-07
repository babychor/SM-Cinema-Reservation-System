import React from 'react';
import './Navbar.css';
import logo from '../../Assets/sm-logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform sign-out logic here if needed
    navigate('/'); // Navigate to the login page
  };

  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li>
            <button className='sgn' onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
