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

console.clear();

getMemberStatus()
    .then((member) => {
        console.log(member);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=> {
        console.log("All done!");
    });
