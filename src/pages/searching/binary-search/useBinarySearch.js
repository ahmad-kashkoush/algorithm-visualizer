import { DELAY_TIME } from "@/utils/constans";
import { delay } from "@/utils/helpers";
import { useState } from "react";


/** TODO
 *  -  Stop update when changing array or clicking stop button
 */
function useBinarySearch({ arr, target }) {
    const [active, setActive] = useState([]);
    function handleBinarySearch(e) {
        e.preventDefault();
        (async function () {
            const a = [...arr];
            const n = a.length;
            let [l, r] = [0, n - 1];
            if (target < a[l] || target > a[r]) {
                console.log(target);
                alert("Enter number in range");
                return;
            }
            while (l <= r) {
                let mid = Math.floor(l + (r - l) / 2);
                setActive([
                    { index: l, color: "bg-green-500", content: "left" },
                    { index: mid, color: "bg-green-500", content: "middle" },
                    { index: r, color: "bg-green-500", content: "right" }

                ]);
                await delay(DELAY_TIME)
                if (a[mid] === target) {
                    setActive([
                        { index: mid, color: "bg-green-500", content: "middle" }
                    ]);
                    break;
                }
                else if (a[mid] > target) {
                    console.log("answer is in the left");
                    setActive([
                        { index: l, color: "bg-yellow-500", content: "left" },
                        { index: mid, color: "bg-green-500", content: "middle" }
                    ]);
                    await delay(DELAY_TIME);
                    r = mid - 1;

                }
                else if (a[mid] < target) {
                    console.log('Answer is in the right side');
                    setActive([
                        { index: r, color: "bg-yellow-500", content: "right" },
                        { index: mid, color: "bg-green-500", content: "middle" }
                    ]);
                    await delay(DELAY_TIME);
                    l = mid + 1;
                }
            }
            await delay(DELAY_TIME + 3)
            setActive((cur) => {
                if (cur.length > 1) return [];
                return [{ ...cur[0], content: "Target" }];// will be target value
            });
            return;
        })();
    }


    return { handleSearch: handleBinarySearch, active };
}
export { useBinarySearch };
