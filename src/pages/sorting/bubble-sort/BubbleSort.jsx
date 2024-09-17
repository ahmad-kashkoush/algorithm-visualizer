import { useBubbleSort } from "@/pages/sorting/bubble-sort/useBubbleSort";
import SortFields from "@/pages/sorting/SortFields";

function BubbleSort() {
  return (
    <>
      <h1> BubbleSort </h1>
      <SortFields useHandler={useBubbleSort} />
    </>
  );
}
export default BubbleSort;
