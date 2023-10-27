function makeFunc() {
    const name = "Chris";

    function displayName() {
        console.log(name);
    }

    return displayName;
}

const myFunc = makeFunc();

myFunc();
