import { useState } from 'react';

export default function Task() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🔥 useState Practice Tasks</h1>

      <hr />
      <ShowHidePassword />

      <hr />
      <LikeButton />

      <hr />
      <TextLengthCounter />

      <hr />
      <ThemeSwitcher />

      <hr />
      <ModalExample />

      <hr />
      <TodoApp />

      <hr />
      <FontSizeController />

      <hr />
      <Tabs />

      <hr />
      <ImageToggle />

      <hr />
      <LoadingButton />
    </div>
  );
}

/* 1. Show / Hide Password */
function ShowHidePassword() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>1️⃣ Show / Hide Password</h3>
      <input type={show ? 'text' : 'password'} placeholder="Password" />
      <button onClick={() => setShow(!show)}>
        {show ? '🙈 Hide' : '👁 Show'}
      </button>
    </div>
  );
}

/* 2. Like Button */
function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div>
      <h3>2️⃣ Like Button</h3>
      <button onClick={toggleLike}>
        {liked ? '❤️' : '🤍'} {count}
      </button>
    </div>
  );
}

/* 3. Text Length Counter */
function TextLengthCounter() {
  const [text, setText] = useState('');

  return (
    <div>
      <h3>3️⃣ Text Length Counter</h3>
      <textarea onChange={(e) => setText(e.target.value)} />
      <p style={{ color: text.length > 100 ? 'red' : 'black' }}>
        Characters: {text.length}
      </p>
    </div>
  );
}

/* 4. Theme Switcher */
function ThemeSwitcher() {
  const themes = ['light', 'dark', 'blue'];
  const [index, setIndex] = useState(0);

  const nextTheme = () => {
    setIndex((index + 1) % themes.length);
  };

  return (
    <div
      style={{
        padding: '10px',
        background:
          themes[index] === 'light'
            ? '#eee'
            : themes[index] === 'dark'
              ? '#333'
              : '#4da6ff',
        color: themes[index] === 'dark' ? 'white' : 'black',
      }}
    >
      <h3>4️⃣ Theme Switcher</h3>
      <button onClick={nextTheme}>Change Theme</button>
    </div>
  );
}

/* 5. Modal */
function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3>5️⃣ Modal</h3>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div style={{ border: '1px solid black', padding: '10px' }}>
          <p>This is modal</p>
          <button onClick={() => setOpen(false)}>❌ Close</button>
        </div>
      )}
    </div>
  );
}

/* 6. Todo App */
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const addTodo = () => {
    if (!value) return;
    setTodos([...todos, value]);
    setValue('');
  };

  return (
    <div>
      <h3>6️⃣ Todo App</h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button
              onClick={() => setTodos(todos.filter((_, index) => index !== i))}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* 7. Font Size Controller */
function FontSizeController() {
  const [size, setSize] = useState(16);

  return (
    <div>
      <h3>7️⃣ Font Size Controller</h3>
      <p style={{ fontSize: size }}>Sample Text</p>
      <button onClick={() => setSize(Math.max(12, size - 2))}>-</button>
      <button onClick={() => setSize(Math.min(40, size + 2))}>+</button>
    </div>
  );
}

/* 8. Tabs */
function Tabs() {
  const [active, setActive] = useState('about');

  return (
    <div>
      <h3>8️⃣ Tabs</h3>
      <button onClick={() => setActive('about')}>About</button>
      <button onClick={() => setActive('products')}>Products</button>
      <button onClick={() => setActive('contact')}>Contact</button>

      <p>
        {active === 'about' && 'About content'}
        {active === 'products' && 'Products content'}
        {active === 'contact' && 'Contact content'}
      </p>
    </div>
  );
}

/* 9. Image Toggle */
function ImageToggle() {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF',
  ];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h3>9️⃣ Image Toggle</h3>
      <img src={images[index]} alt="" />
      <br />
      <button onClick={() => setIndex(index === 0 ? 1 : 0)}>
        Toggle Image
      </button>
    </div>
  );
}

/* 10. Loading Button */
function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div>
      <h3>🔟 Loading Button</h3>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
}
