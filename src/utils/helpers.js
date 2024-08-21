const timeouts = [];
export function delay(delayInSeconds) {
    return new Promise(resolve => {
        let timeoutId = setTimeout(() => {
            resolve(delayInSeconds * 1000)
            timeouts.push(timeoutId);
        }, delayInSeconds * 1000);
    })
}
export function clearTimeouts() {
    while (timeouts.length > 0) {
            clearTimeout(timeouts.at(-1));
            console.log(timeouts);
            timeouts.pop();
    }
}