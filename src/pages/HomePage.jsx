import { useState } from 'react';
import Navbar from '../components/Navbar';
import ParentComponent from '../components/ParentComponent';
import GetData from '../components/GetData';
function HomePage() {
  const [count, setCount] = useState(0);
  const [textLength, setTextLength] = useState('');
  const [modal, setModal] = useState(false);

  // function addedCount() {
  //   return setCount(count + 1);
  // }

  // function removeCount() {
  //   return setCount(count - 1);
  // }

  return (
    <div className="container">
      {/* <Navbar />

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

      <input
        className="input"
        type="text"
        placeholder="enter text"
        onChange={(event) => setTextLength(event.target.value)}
      />
      <p>{textLength.length}</p>

      <button onClick={() => setModal(!modal)} className="button">
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>

      {modal && (
        <div className="modal">
          <h2>Hello modal</h2>
          <button onClick={() => setModal(!modal)}>X</button>
        </div>
      )} */}

      <GetData />
    </div>
  );
}

export default HomePage;

// Uyga vazifa  useState dan foydalaning!!!
// 1) Inputdan yoki textarea dan kiritilgan qiymatini length ya'ni uzunligi real DOM da ko'rinadigan qilasiz
// 2) modal yasab ko'rasiz useStatedan foydalanib open modal bosilganda oyna ochilsin x bosilganda modal yopilsin
