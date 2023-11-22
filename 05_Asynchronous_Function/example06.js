let isMember = Math.floor(Math.random() * 2); // 0 or 1

function getMemberStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isMember) {
                resolve('Is member');
            } else {
                reject('Not a member');
            }
        }, 1000);
    });
}

function onFulfilled(member) {
    console.log(member);
}

function onRejected(error) {
    console.log(error);
}

console.clear();

const promise = getMemberStatus();
//promise.then(onFulfilled, onRejected);

promise
    .then(onFulfilled)
    .catch(onRejected);
