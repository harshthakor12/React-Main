import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} </p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>+increment</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount(count - 1)}>-decrement</button>
      </div>
    </div>
  );
}
export default Counter;
