import React from 'react';

const EventsFunctionsStates = () => {
  const sayHello = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <>
      <h4>Events Function & States</h4>
      <button onClick={() => sayHello('Madhu')}>Click me</button>
    </>
  );
};

export default EventsFunctionsStates;
