import { DELAY_TIME } from "@/utils/constans";
import { delay } from "@/utils/helpers";
import { useState } from "react";

async function mergeSort(arr, l, r, updateArray, setActive) {
    if (l >= r) return;
    const mid = Math.floor((l + r) / 2);
    await mergeSort(arr, l, mid, updateArray, setActive);
    await mergeSort(arr, mid + 1, r, updateArray, setActive);
    await merge(arr, l, r, mid, updateArray, setActive);
}
async function merge(arr, l, r, mid, updateArray, setActive) {
    const activeBounds = [
        { index: l, color: "bg-orange-500", content: "L" },
        { index: r, color: "bg-orange-500", content: "r" },
        { index: mid, color: "bg-orange-500", content: "mid" }
    ]
    setActive([...activeBounds]);


    let leftArr = Array.from({ length: mid - l + 1 }, (_, index) => arr[l + index]);
    // console.log("leftArr:-----------------", leftArr);
    let rightArr = Array.from({ length: r - mid }, (_, index) => arr[index + mid + 1])
    // console.log("rightArr:-----------------", rightArr);
    let [i, j, k] = [0, 0, l];

    while (i < leftArr.length && j < rightArr.length) {
        setActive([...activeBounds,
        { index: l + i, color: "bg-green-500", content: "i" },
        { index: j + mid + 1, color: "bg-green-500", content: "j" },
        { index: k, color: "bg-yellow-500", content: "k" }
        ])
        await delay(DELAY_TIME);
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            updateArray(() => arr);
            i++
        } else {
            arr[k] = rightArr[j];
            updateArray(() => arr);
            j++;
        }
        await delay(DELAY_TIME);
        k++;
    }
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        updateArray(() => arr);
        setActive([
            ...activeBounds,
            { index: l + i, color: "bg-green-500", content: "i" },
            { index: k, color: "bg-yellow-500", content: "k" }
        ]);
        await delay(DELAY_TIME);
        i++, k++;
    }
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        updateArray(() => arr);
        setActive([
            ...activeBounds,
            { index: j + mid + 1, color: "bg-green-500", content: "j" },
            { index: k, color: "bg-yellow-500", content: "k" }
        ]);

        await delay(DELAY_TIME);
        j++, k++;
    }
    updateArray(() => arr);
    await delay(DELAY_TIME);
    setActive([]);

}

function useMergeSort({ arr, updateArray }) {


    const [active, setActive] = useState([]);


    function handleMergeSort(e) {
        e.preventDefault();
        // todo: create merge sort algorithm
        let newArr = [...arr];
        mergeSort(newArr, 0, newArr.length - 1, updateArray, setActive)


    }


    return { active, handleSort: handleMergeSort };
}
export { useMergeSort };

