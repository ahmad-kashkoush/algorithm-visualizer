import { useBubbleSort } from "@/hooks/useBubbleSort";
import { useSelectionSort } from "@/hooks/useSelectionSort";
import ArrayInput from "@/ui/ArrayInput";
import ArrayWrapper from "@/ui/ArrayWrapper";

import { useState } from "react";

function App() {
  const [arr, setArr] = useState([5, 4, 3, 2, 1]);
  const [algo, setAlgo] = useState(""); // contains algo key
  const { handleBubbleSort, active: activeBubble } = useBubbleSort({
    arr: arr,
    updateArray: setArr,
  });

  const { handleSelectionSort, active: activeSelection } = useSelectionSort({
    arr: arr,
    updateArray: setArr,
  });

  const activeMapper = {
    bubble: activeBubble,
    selection: activeSelection,
  };

  function handleEnterArray(arr) {
    setArr(arr);
  }
  return (
    <div className="w-screen px-12 py-8">
      <ArrayInput handleEnterArray={handleEnterArray} />
      <ArrayWrapper arr={arr} active={activeMapper[algo] || []} />
      <div className="actions mx-auto mt-8 w-fit space-x-4">
        <button
          data-id="bubble"
          onClick={(e) => {
            handleBubbleSort(e);
            setAlgo(e.target.dataset.id);
          }}
        >
          Bubble sort
        </button>
        <button
          data-id="selection"
          onClick={(e) => {
            handleSelectionSort(e);
            setAlgo(e.target.dataset.id);
          }}
        >
          Selection sort
        </button>
      </div>
    </div>
  );
}

export default App;
