import { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value }) {
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
    <div className="counterApp">
      <div className="counter">
        <h1>{counter}</h1>
        <div className="buttons">
          <button onClick={counterDecrement}>-</button>
          <button onClick={counterReset}>Reset</button>
          <button onClick={counterIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
