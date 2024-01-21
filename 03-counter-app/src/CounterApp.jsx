import { useState } from "react";
import PropTypes from 'prop-types';

function CounterApp({value}) {
  const [counter, setCounter] = useState(value);

  const counterIncrement = () => {
    setCounter(counter + 1);
  };

  const counterDecrement = () => {
    setCounter(counter - 1);
  };

  const counterReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h2>El valor del contador es {counter}</h2>
      <button onClick={counterDecrement}>Contador --</button>
      <button onClick={counterReset}>Contador = {value}</button>
      <button onClick={counterIncrement}>Contador ++</button>
    </>
  );
}

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}
