import { useState } from 'react';
import Navbar from '../components/Navbar';
import ParentComponent from '../components/ParentComponent';

function HomePage() {
  const [count, setCount] = useState(0);

  // function addedCount() {
  //   return setCount(count + 1);
  // }

  // function removeCount() {
  //   return setCount(count - 1);
  // }

  return (
    <div>
      <Navbar />

      <div className="button-container">
        <button onClick={() => setCount(count - 1)} className="button-3d">
          <div className="button-top">
            <span className="material-icons">-</span>
          </div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)} className="button-3d">
          <div className="button-top">
            <span className="material-icons">+</span>
          </div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
      </div>

      <ParentComponent />
    </div>
  );
}

export default HomePage;
