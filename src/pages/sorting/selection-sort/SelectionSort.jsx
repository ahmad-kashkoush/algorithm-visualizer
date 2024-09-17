import { useSelectionSort } from "@/pages/sorting/selection-sort/useSelectionSort";
import SortFields from "@/pages/sorting/SortFields";

function SelectionSort() {
  return (
    <main className="flex-1">
      <h1> Selection Sort </h1>
      <SortFields useHandler={useSelectionSort} />
    </main>
  );
}

export default SelectionSort;
