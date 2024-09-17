import { useSelectionSort } from "@/pages/sorting/selection-sort/useSelectionSort";
import SortFields from "@/pages/sorting/SortFields";

function SelectionSort() {
  return (
    <>
      <h1> Selection Sort </h1>
      <SortFields useHandler={useSelectionSort} />
    </>
  );
}

export default SelectionSort;
