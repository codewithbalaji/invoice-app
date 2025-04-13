import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faUser, 
  faBagShopping, 
  faFileInvoice, 
  faChartColumn, 
  faGear, 
  faAngleLeft, 
  faClipboard
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import invoiceLogo from '@/assets/img/invoice-icon.avif';
import './sidebarStyle.css';

const SidebarItem = ({ to, icon, text, isActive }) => {
  return (
    <Link
      to={to}
      className={`sidebar-link d-flex align-items-center text-white text-decoration-none ps-4 py-3 ${isActive ? 'active-link' : ''}`}
    >
      <FontAwesomeIcon icon={icon} className="me-3" />
      <span>{text}</span>
    </Link>
  );
};

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <aside className="bg-dark vh-100 sidebarNav-body">
      <div className="sidebar-header pt-4 ps-3 mb-4">
        <Link to="/" className="text-decoration-none d-flex align-items-center">
          <img src={invoiceLogo} alt="Invoice Logo" width="30px" height="30px" className="rounded-circle" />
          <h3 className="d-inline text-white mx-2">Invoice</h3>
        </Link>
      </div>
      
      <nav className="sidebar-nav mb-5">
        <SidebarItem to="/dashboard" icon={faHouse} text="Home" isActive={currentPath === '/dashboard'} />
        <SidebarItem to="/dashboard/customers" icon={faUser} text="Customers" isActive={currentPath === '/dashboard/customers'} />
        <SidebarItem to="/dashboard/items" icon={faBagShopping} text="Items" isActive={currentPath === '/dashboard/items'} />
        <SidebarItem to="/dashboard/invoice" icon={faFileInvoice} text="Invoice" isActive={currentPath === '/dashboard/invoice'} />
        <SidebarItem to="/dashboard/expenses" icon={faClipboard} text="Expenses" isActive={currentPath === '/dashboard/expenses'} />
        <SidebarItem to="/dashboard/salesreports" icon={faChartColumn} text="Sales Reports" isActive={currentPath === '/dashboard/salesreports'} />
        <SidebarItem to="/dashboard/settings" icon={faGear} text="Settings" isActive={currentPath === '/dashboard/settings'} />
      </nav>
      
      <div className="sidebar-footer position-absolute bottom-0 start-0 w-100 p-3">
        <div className="close-button text-white" onClick={onClose} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faAngleLeft} className="icon" />
          <span className="ms-2">Close Sidebar</span>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
