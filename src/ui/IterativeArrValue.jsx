function IterativeArrValue({ index, active, val, n }) {
  // 110+val to remove negatives
  // max value =210 =>/10=21 =>*
  const height = Math.min(((val + 110) / 10) * 21, 450);
  const width = 100 / n;
  const activeColor = active?.color || "bg-blue-500";
  const activeContent = active?.content || "";
  return (
    <div
      className={`${activeColor} relative flex flex-col items-center p-4 text-center`}
      style={{
        height: `${height}px`,
        width: `${width - 3}%`,
      }}
    >
      {activeContent && (
        <p className="bg-yellow-500 text-black"
          style={{
            position: "absolute",
            top: "-2rem",
          }}
        >
          {activeContent}
        </p>
      )}
      <p>{val}</p>
    </div>
  );
}

export default IterativeArrValue;
