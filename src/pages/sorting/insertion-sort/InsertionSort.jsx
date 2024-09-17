import { useInsertionSort } from "@/pages/sorting/insertion-sort/useInsertionSort";
import SortFields from "@/pages/sorting/SortFields";

function InsertionSort() {
  return (
    <main className="flex-1">
      <h1> Insertion Sort </h1>
      <SortFields useHandler={useInsertionSort} />
    </main>
  );
}
export default InsertionSort;
