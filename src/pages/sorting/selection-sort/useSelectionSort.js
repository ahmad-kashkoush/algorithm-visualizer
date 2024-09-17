import { DELAY_TIME } from "@/utils/constans";
import { delay } from "@/utils/helpers";
import { useState } from "react";

function useSelectionSort({ arr, updateArray }) {

    const [active, setActive] = useState([]);

    function handleSelectionSort(e) {
        e.preventDefault();
        (async function () {
            const newArr = [...arr];
            for (let start = 0; start < newArr.length; start++) {
                // index of minimum value
                let min = start;
                for (let i = start; i < newArr.length; i++) {
                    setActive([
                        ...Array.from({ length: start  }, (_, index) => ({ index: index, color: "bg-yellow-500" })),
                        { index: min, color: "bg-green-500" },
                        { index: start, color: "bg-red-500" },
                        { index: i, color: "bg-red-500" }
                    ]);
                    await delay(DELAY_TIME);
                    if (newArr[min] > newArr[i])
                        min = i;
                }
                [newArr[min], newArr[start]] = [newArr[start], newArr[min]];
                updateArray(() => newArr);

            }
            setActive([]);

        })()



    }
    return { active, handleSort:handleSelectionSort}



}
export { useSelectionSort };