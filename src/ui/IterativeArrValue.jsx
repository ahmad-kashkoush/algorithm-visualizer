function IterativeArrValue({ index, activeColor, val, n }) {
  // 110+val to remove negatives
  // max value =210 =>/10=21 =>*
  const height = Math.min(((val + 110) / 10) * 21, 450);
  const width = 100 / n;
  return (
    <span
      className={activeColor}
      style={{
        height: `${height}px`,
        width: `${width - 10}%`,
      }}
    >
      {val}
    </span>
  );
}

export default IterativeArrValue;
