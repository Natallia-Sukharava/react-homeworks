import { useState } from "react";
import "./App.css";
import BurgerList from "./components/BurgerList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1></h1>
      
      {}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {}
      <BurgerList />
    </div>
  );
}

export default App;
