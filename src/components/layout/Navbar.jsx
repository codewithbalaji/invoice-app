import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onMenuClick, text }) => {
  return (
    <header className='sticky-top'>
      <nav className="d-flex justify-content-between p-3 align-items-center bg-dark text-white">
        <div className="d-flex gap-3 align-items-center">
          <FontAwesomeIcon 
            icon={faBars} 
            onClick={onMenuClick} 
            style={{ cursor: 'pointer' }} 
            className="toggle-icon"
          />
          <h5 className="m-0">{text}</h5>
        </div>
        <div className="d-flex align-items-center gap-3">
          <FontAwesomeIcon icon={faBell} style={{ cursor: 'pointer' }} />
         
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Navbar;
