import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handelAdd() {
    setCount((previousCount) => previousCount + 1);
    // You can use
    // setCount(count + 1)
  }

  function handelSub() {
    setCount((previousCount) => previousCount - 1);
    // You can use
    // setCount(count - 1)
  }

  function handelReset() {
    setCount((previousCount) => (previousCount = 0));
    // You can use
    // setCount(0)
  }
  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handelAdd} className="add">
          ADD
        </button>
        <button onClick={handelSub} className="sub">
          SUB
        </button>
        <button onClick={handelReset} className="reset">
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
