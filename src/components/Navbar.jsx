import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
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
          <button className="navbar__btn">Log in</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
