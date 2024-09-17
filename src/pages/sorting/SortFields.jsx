import ArrayInput from "@/ui/ArrayInput";
import ArrayWrapper from "@/ui/ArrayWrapper";
import { useState } from "react";

function SortFields({ useHandler }) {
  const [arr, setArr] = useState([5, 4, 3, 2, 1]);
  const { handleSort, active } = useHandler({
    arr: arr,
    updateArray: setArr,
  });
  return (
    <>
      <ArrayInput handleEnterArray={setArr} />
      <ArrayWrapper arr={arr} active={active} />
      <div className="actions mx-auto mt-8 w-fit space-x-4">
        <button onClick={(e)=>{handleSort(e)}}>Sort </button>
      </div>
    </>
  );
}
export default SortFields;
