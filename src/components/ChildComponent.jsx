function ChildComponent({ sendData }) {
  return (
    <div>
      Child components
      <button onClick={() => sendData('Salom Parent Component')}>
        Yuborish
      </button>
    </div>
  );
}

export default ChildComponent;
