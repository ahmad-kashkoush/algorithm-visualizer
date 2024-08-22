import { DELAY_TIME } from "@/utils/constans";
import { delay } from "@/utils/helpers";
import { useState } from "react";

function useInsertionSort({ arr, updateArray }) {
    const [active, setActive] = useState([]);
    // todo: figure out what active elements to set and of what color

    function handleInsertionSort(e) {
        e.preventDefault();

        (async function () {
            let newArr = [...arr];
            let n = newArr.length;
            for (let i = 1; i < n; i++) {
                let key = newArr[i];// key is arr element to be positioned in first part
                let j = i - 1;
                while (j >= 0 && key < newArr[j]) {
                    setActive([
                        { index: j + 1, color: "bg-red-500" },
                        { index: j, color: "bg-red-500" },
                        { index: i, color: "bg-green-500", content:`prev:${key}` }
                    ])
                    await delay(DELAY_TIME);

                    newArr[j + 1] = newArr[j];
                    updateArray(() => newArr);
                    j--;
                }
                newArr[j + 1] = key;

                updateArray(() => newArr)

            }
            setActive([]);


        })()

    }


    return { active, handleInsertionSort };


}
export { useInsertionSort };