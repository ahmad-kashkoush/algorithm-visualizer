import BinarySearch from "@/pages/searching/binary-search/BinarySearch";
import BubbleSort from "@/pages/sorting/bubble-sort/BubbleSort";
import InsertionSort from "@/pages/sorting/insertion-sort/InsertionSort";
import MergeSort from "@/pages/sorting/merge-sort/MergeSort";
import SelectionSort from "@/pages/sorting/selection-sort/SelectionSort";
import Sorting from "@/pages/sorting/Sorting";
import AppLayout from "@/ui/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    // route wrapper
    element: <AppLayout />,
    path: "/",
    children: [
      // sorting
      { path: "/sort", element: <Sorting /> },
      { path: "/sort/bubble-sort", element: <BubbleSort /> },
      { path: "/sort/selection-sort", element: <SelectionSort /> },
      { path: "/sort/insertion-sort", element: <InsertionSort /> },
      { path: "/sort/merge-sort", element: <MergeSort /> },
      // searching
      { path: "/search/binary-search", element: <BinarySearch /> },

    ],
    // add outlets
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
