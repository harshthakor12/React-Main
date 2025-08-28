import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./CounterSlice";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <h1> {count}</h1>

      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>+ Increment</button>
        <button onClick={() => dispatch(decrement())}>- Decrement</button>
      </div>

      <div className="counter-input">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
