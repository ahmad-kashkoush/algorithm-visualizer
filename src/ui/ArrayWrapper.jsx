import IterativeArrValue from "@/ui/IterativeArrValue";

function ArrayWrapper({ arr, active }) {
  return (
    <div className="array-wrapper flex items-end justify-around">
      {arr.map((val, i) => (
        <IterativeArrValue
          key={i}
          val={val}
          index={i}
          isActive={active.includes(i)}
          n={arr.length}
        />
      ))}
    </div>
  );
}
export default ArrayWrapper;
