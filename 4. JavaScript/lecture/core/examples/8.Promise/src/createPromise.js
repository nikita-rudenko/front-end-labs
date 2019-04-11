export function createPromise(timeout, resolved){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // переведёт промис в состояние fulfilled с результатом "result"
            if(resolved){
                console.log("resolved", timeout);
                resolve({result : timeout});
            } else {
                console.log("error", timeout);
                reject({error:timeout})
            }
        }, timeout);
    });
}