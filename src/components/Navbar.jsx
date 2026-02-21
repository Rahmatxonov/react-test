import { IoSunnyOutline } from 'react-icons/io5';
import { RxMoon } from 'react-icons/rx';

function Navbar({ darkMode, setDarkMode, search, setSearch }) {
  function toggleTheme() {
    setDarkMode((item) => {
      const value = !item;
      localStorage.setItem('dark', value);
      return value;
    });
  }

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <h2>LOGO</h2>

          <input
            type="text"
            placeholder="search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div onClick={toggleTheme} className="icons">
            {darkMode ? (
              <IoSunnyOutline className="icon" />
            ) : (
              <RxMoon className="icon" />
            )}
          </div>

          <button className="navbar__btn">Log in</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
