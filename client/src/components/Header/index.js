import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import BurgerMenu from '../BurgerMenu/index';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div className="container flex-row justify-space-between-lg justify-center align-center white content.navbar transparent.navbar brand">
        <Link to="/">
          <h1>Teaching Artist Hub</h1>
        </Link>
        
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <BurgerMenu />
            </>
          ) : (
            <>
            <a href="/" onClick={logout}>
                Logout
              </a>
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
