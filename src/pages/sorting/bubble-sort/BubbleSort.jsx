import { useBubbleSort } from "@/pages/sorting/bubble-sort/useBubbleSort";
import SortFields from "@/pages/sorting/SortFields";

function BubbleSort() {
  return (
    <main className="flex-1">
      <h1> BubbleSort </h1>
      <SortFields useHandler={useBubbleSort} />
    </main>
  );
}
export default BubbleSort;
