import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import BurgerMenu from '../BurgerMenu/index'
const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header id="headerbg" className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Teaching Artist Hub</h1>
        </Link>
        <div>
          <BurgerMenu />
        </div>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">View Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
              <Link to="/calendar">Calendar</Link>
              <Link to="/home">Forum & Announcements</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
            
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
