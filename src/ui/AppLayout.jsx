
import Sidebar from "@/ui/Sidebar";
import { Outlet } from "react-router";

function AppLayout() {

  // const [algo, setAlgo] = useState(""); // contains algo key

  // const { handleSelectionSort, active: activeSelection } = useSelectionSort({
  //   arr: arr,
  //   updateArray: setArr,
  // });
  // const { handleInsertionSort, active: activeInsertion } = useInsertionSort({
  //   arr: arr,
  //   updateArray: setArr,
  // });
  // const { handleMergeSort, active: activeMerge } = useMergeSort({
  //   arr: arr,
  //   updateArray: setArr,
  // });

  // const activeMapper = {
  //   bubble: activeBubble,
  //   selection: activeSelection,
  //   insertion: activeInsertion,
  //   merge: activeMerge,
  // };

  
  return (
    <div className="w-screen px-12 py-8 flex">
      <Sidebar/>
      <Outlet/>
      {/*
        <button
          data-id="selection"
          onClick={(e) => {
            handleSelectionSort(e);
            setAlgo(e.target.dataset.id);
          }}
        >
          Selection sort
        </button>
        <button
          data-id="insertion"
          onClick={(e) => {
            handleInsertionSort(e);
            setAlgo(e.target.dataset.id);
          }}
        >
          Insertion sort
        </button>
        <button
          data-id="merge"
          onClick={(e) => {
            handleMergeSort(e);
            setAlgo(e.target.dataset.id);
          }}
        >
          Merge sort
        </button>
        <button
          data-id="quick"
          onClick={(e) => {
            // todo
            setAlgo(e.target.dataset.id);
          }}
        >
          Quick sort
        </button>
      </div> */}
    </div>
  );
}

export default AppLayout;
