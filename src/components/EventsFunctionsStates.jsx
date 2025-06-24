import React, {useState} from 'react';

const EventsFunctionsStates = () => {
    const [firstName, setFirstName]=useState("Madhumita");

  const sayHello = (name) => {
    alert(`Hello ${name}`);
  };
  const changeName = () =>{
    setFirstName ("Madhu");
  }

  return (
    <>
      <h4>Events Function & States</h4>
      <button onClick={() => sayHello('Madhu')}>Click me</button>
      <br/><br/>
      <h2>My name is {firstName}</h2>
      <button onClick={changeName}>Change name</button>
    </>
  );
};

export default EventsFunctionsStates;
