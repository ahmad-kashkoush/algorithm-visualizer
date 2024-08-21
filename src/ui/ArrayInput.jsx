import { useState } from "react";

function ArrayInput({ handleEnterArray }) {
  const [arrayString, setArrayString] = useState("1,3,2,4");
  function handleSubmit(e) {
    // todo validation
    e.preventDefault();
    const arr = arrayString.split(",").map((item) => Number(item));
    handleEnterArray(arr);
    setArrayString("");
  }
  function handleSubmitRandom(e) {
    e.preventDefault();
    const arrayLength = Math.floor(Math.random() * (30 - 5) + 5);
    const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
    // make array Unique
    let arr = [];
    while (arr.length < arrayLength) {
      const randomInt = getRandomInt(100);
      if (!arr.includes(randomInt)) arr.push(randomInt);
    
    }
    handleEnterArray(arr);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter numbers seperated by ,"
          defaultValue={arrayString}
          onChange={(e) => setArrayString(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <button onClick={handleSubmitRandom}>Random</button>
    </>
  );
}
export default ArrayInput;
