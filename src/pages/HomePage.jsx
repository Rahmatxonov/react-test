import { useState } from 'react';
import Navbar from '../components/Navbar';
function HomePage() {
  const [count, setCount] = useState(0);

  // function addedCount() {
  //   return setCount(count + 1);
  // }

  // function removeCount() {
  //   return setCount(count - 1);
  // }

  return (
    <div className="container">
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
    </div>
  );
}

export default HomePage;

// Uyga vazifa  useState dan foydalaning!!!
// 1) Inputdan yoki textarea dan kiritilgan qiymatini length ya'ni uzunligi real DOM da ko'rinadigan qilasiz
// 2) modal yasab ko'rasiz useStatedan foydalanib open modal bosilganda oyna ochilsin x bosilganda modal yopilsin
