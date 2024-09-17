import { useMergeSort } from "@/pages/sorting/merge-sort/useMergeSort";
import SortFields from "@/pages/sorting/SortFields";

function MergeSort() {
  return (
    <>
      <h1> Merge Sort </h1>
      <SortFields useHandler={useMergeSort} />
    </>
  );
}
export default MergeSort;
