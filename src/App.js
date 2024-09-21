import "./App.css";

function App() {
  let count = 0;

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={() => count + 1} className="add">
          ADD
        </button>
        <button onClick={() => count - 1} className="sub">
          SUB
        </button>
      </div>
    </div>
  );
}

export default App;
