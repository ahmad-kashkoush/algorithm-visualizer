import { useBinarySearch } from "@/pages/searching/binary-search/useBinarySearch";
import SearchFields from "@/pages/searching/SearchFields";

function BinarySearch() {
  return (
    <>
      <h1>Binary Search</h1>
      <SearchFields useHandler={useBinarySearch} sortEnteredArray={true} />
    </>
  );
}
export default BinarySearch;
