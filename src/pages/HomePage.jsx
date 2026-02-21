import GetData from '../components/GetData';
function HomePage({ darkMode, setDarkMode }) {
  return (
    <div className="container">
      <GetData darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default HomePage;
