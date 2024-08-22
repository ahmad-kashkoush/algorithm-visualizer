import { useState } from "react";

function ArrayInput({ handleEnterArray }) {
  const [length, setLength] = useState(10);
  function handleSubmitRandom(e) {
    e.preventDefault();
    let arr = [];
    while (arr.length < length) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;

      if (!arr.includes(randomNumber)) arr.push(randomNumber);
     
    }
    handleEnterArray(arr);
  }
  return (
    <div className=" flex justify-center items-center gap-4 mb-8">
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
