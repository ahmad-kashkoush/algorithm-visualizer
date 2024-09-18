import ArrayInput from "@/ui/ArrayInput";
import ArrayWrapper from "@/ui/ArrayWrapper";
import { useState } from "react";

function SearchFields({ useHandler, sortEnteredArray=false }) {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [target, setTarget] = useState(3);
  const { handleSearch, active } = useHandler({
    arr: arr,
    updateArray: setArr,
    target: target,
  });

  return (
    <>
      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(+e.target.value)}
      />
      <ArrayInput handleEnterArray={setArr} isSorted={sortEnteredArray} />
      <ArrayWrapper arr={arr} active={active} />
      <div className="actions mx-auto mt-8 w-fit space-x-4">
        <button
          onClick={(e) => {
            handleSearch(e);
          }}
        >
          Sort{" "}
        </button>
      </div>
    </>
  );
}
export default SearchFields;
