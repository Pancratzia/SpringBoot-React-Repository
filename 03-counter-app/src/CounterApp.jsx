import { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(0);

  const counterIncrement = () => {
    setCounter(counter + 1);
  };

  const counterDecrement = () => {
    setCounter(counter - 1);
  };

  const counterReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h2>El valor del contador es {counter}</h2>
      <button onClick={counterDecrement}>Contador --</button>
      <button onClick={counterReset}>Contador = 0</button>
      <button onClick={counterIncrement}>Contador ++</button>
    </>
  );
}

export default CounterApp;
