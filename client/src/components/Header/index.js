import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import BurgerMenu from '../BurgerMenu/index';

const Header = () => {
  return (
    <header>
      <div className="container flex-row justify-space-between-lg justify-center align-center white content.navbar transparent.navbar brand">
        {/* <img src="https://i.imgur.com/ehPQscd.png" alt="TAH Header"></img> */}
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <BurgerMenu />
            </>
          ) : (<>
            <Link to="/login">Login</Link>
          <br></br>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
