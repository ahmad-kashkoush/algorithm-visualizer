import { useInsertionSort } from "@/pages/sorting/insertion-sort/useInsertionSort";
import SortFields from "@/pages/sorting/SortFields";

function InsertionSort() {
  return (
    <>
      <h1> Insertion Sort </h1>
      <SortFields useHandler={useInsertionSort} />
    </>
  );
}
export default InsertionSort;
