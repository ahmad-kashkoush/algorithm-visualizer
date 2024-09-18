import { DELAY_TIME } from "@/utils/constans";
import { delay } from "@/utils/helpers";
import { useState } from "react";


/** TODO
 *  -  Stop update when changing array or clicking stop button
 */
function useBubbleSort({ arr, updateArray }) {
    const [active, setActive] = useState([]);
    function handleBubbleSort(e) {
        e.preventDefault();
        (async function () {
            const a = [...arr];
            const n = a.length;
            for (let i = 0; i < n; i++) {
                let swapped = false;
                // number from n-i-1 to n-1 are sorted
                for (let j = 0; j < n - i - 1; j++) {
                    setActive([
                        ...Array.from({ length: n - 1 - (n - i - 1) + 1 }, (_, index) => ({ index: n - index, color: "bg-yellow-500" })),
                        { index: j, color: "bg-red-500" },
                        { index: j + 1, color: "bg-green-500" }

                    ]);
                    // await delay(DELAY_TIME);
                    if (a[j] > a[j + 1]) {
                        [a[j], a[j + 1]] = [a[j + 1], a[j]];
                        swapped = true;
                        updateArray(() => a);
                        await delay(DELAY_TIME);
                    }
                }
                if (!swapped) {
                    setActive([]);
                    return;
                }
            }
            updateArray(() => a);
        })();
    }


    return { handleSort: handleBubbleSort, active };
}
export { useBubbleSort };
