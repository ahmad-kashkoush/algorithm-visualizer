import ArrayInput from "@/ui/ArrayInput";
import ArrayWrapper from "@/ui/ArrayWrapper";

import { useState } from "react";

function App() {
  const [arr, setArr] = useState([5, 4, 3, 2, 1]);
  const [algo, setAlgo] = useState(""); // contains algo key
  const activeMapper = {
    bubble: activeBubble,
    selection: activeSelection,

  };

  function handleEnterArray(arr) {
    setArr(arr);
  }
  return (
    <div className="w-screen">
      <ArrayInput handleEnterArray={handleEnterArray} />
      <ArrayWrapper arr={arr} active={activeMapper[algo] || []} />
      <div className="actions mx-auto mt-8 w-fit space-x-4">
        <button
          data-id="bubble"
        >
          Bubble sort
        </button>
        <button
          data-id="selection"
        >
          Selection sort
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
