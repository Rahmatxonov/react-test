import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSunnyOutline } from 'react-icons/io5';
import { RxMoon } from 'react-icons/rx';

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark') === 'true',
  );

  function toggleTheme() {
    setDarkMode((item) => {
      const value = !item;
      localStorage.setItem('dark', value);
      return value;
    });
  }

  return (
    <nav className={darkMode ? 'dark' : 'light'}>
      <div className="container">
        <div className="navbar">
          <h2>LOGO</h2>
          <ul className="navbar__menu">
            <li className="menu__list">
              <NavLink to="/" className="menu__NavLink">
                Home
              </NavLink>
            </li>
            <li className="menu__list">
              <NavLink to="/about" className="menu__NavLink">
                About
              </NavLink>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__NavLink">
                Menu
              </a>
            </li>
            <li className="menu__list">
              <NavLink to="/contact" className="menu__NavLink">
                Contact
              </NavLink>
            </li>
          </ul>

          <div onClick={toggleTheme} className="icons">
            {darkMode ? (
              <IoSunnyOutline className="icon" />
            ) : (
              <RxMoon className="icon" />
            )}
          </div>

          {/* <label className="ui-switch">
            <input onClick={() => setDarkMode(!darkMode)} type="checkbox" />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label> */}

          <button className="navbar__btn">Log in</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
