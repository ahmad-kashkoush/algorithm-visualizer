import { useState } from "react";

function ArrayInput({ handleEnterArray, isSorted }) {
  const [length, setLength] = useState(10);
  function handleSubmitRandom(e) {
    e.preventDefault();
    let arr = [];
    while (arr.length < length) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;

      if (!arr.includes(randomNumber)) arr.push(randomNumber);
    }
    let resArr = isSorted ? arr.sort((a, b) => a - b) : arr;
    handleEnterArray(resArr);
  }
  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      <span>Length: {length}</span>
      <input
        type="range"
        max={20}
        min={5}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <button onClick={handleSubmitRandom}>Random</button>
    </div>
  );
}
export default ArrayInput;
