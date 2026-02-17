import ChildComponent from './ChildComponent';

function ParentComponent() {
  const myName = 'John';
  const myAge = 16;

  const arr = [1, 2, 3, 4, 5];

  const person = {
    fullName: 'John Doe',
    age: 20,
  };

  const userInfo = (data) => {
    console.log(`Child componentdan kelgan data', ${data}`);
  };

  return (
    <ChildComponent
      sendData={userInfo}
      ism={myName}
      yosh={myAge}
      numbers={arr}
      user={person}
    />
  );
}

export default ParentComponent;
