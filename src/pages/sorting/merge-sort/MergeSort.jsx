import { useMergeSort } from "@/pages/sorting/merge-sort/useMergeSort";
import SortFields from "@/pages/sorting/SortFields";

function MergeSort() {
  return (
    <main className="flex-1">
      <h1> Merge Sort </h1>
      <SortFields useHandler={useMergeSort} />
    </main>
  );
}
export default MergeSort;
