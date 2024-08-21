import IterativeArrValue from "@/ui/IterativeArrValue";

function ArrayWrapper({ arr, active }) {
  return (
    <div className="array-wrapper flex items-end justify-around">
      {arr.map((val, i) => (
        <IterativeArrValue
          key={i}
          val={val}
          index={i}
          activeColor={active.find((item) => item.index === i)?.color || "bg-blue-500"}
          n={arr.length}
        />
      ))}
    </div>
  );
}
export default ArrayWrapper;
