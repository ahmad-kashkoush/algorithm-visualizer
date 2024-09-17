import { useBubbleSort } from "@/hooks/useBubbleSort";
import { useInsertionSort } from "@/hooks/useInsertionSort";
import { useMergeSort } from "@/hooks/useMergeSort";
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
  const { handleInsertionSort, active: activeInsertion } = useInsertionSort({
    arr: arr,
    updateArray: setArr,
  });
  const { handleMergeSort, active: activeMerge } = useMergeSort({
    arr: arr,
    updateArray: setArr,
  });

  const activeMapper = {
    bubble: activeBubble,
    selection: activeSelection,
    insertion: activeInsertion,
    merge: activeMerge,
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
        <button
          data-id="insertion"
          onClick={(e) => {
            handleInsertionSort(e);
            setAlgo(e.target.dataset.id);
          }}
        >
          Insertion sort
        </button>
        <button
          data-id="merge"
          onClick={(e) => {
            handleMergeSort(e);
            setAlgo(e.target.dataset.id);
          }}
        >
          Merge sort
        </button>
        <button
          data-id="quick"
          onClick={(e) => {
            // todo
            setAlgo(e.target.dataset.id);
          }}
        >
          Quick sort
        </button>
      </div>
    </div>
  );
}

export default App;
