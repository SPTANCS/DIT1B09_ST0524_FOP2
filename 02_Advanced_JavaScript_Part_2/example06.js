// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment() {
//             changeBy(1);
//         },
//         decrement() {
//             changeBy(-1);
//         },
//         value() {
//             return privateCounter;
//         },
//     };
// })();

function makeCounter() {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    let myCounterObject = {
        increment: function increment() { changeBy(1); },
        decrement: function decrement() { changeBy(-1); },
        value: function value() { return privateCounter; },
    };
    return myCounterObject;
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log("counter 1 > ", counter1.value()); // 0.
console.log("counter 2 > ", counter2.value()); // 0.

counter1.increment();
console.log("counter 1 > ", counter1.value()); // 1
console.log("counter 2 > ", counter2.value()); // 0

counter1.increment();
counter2.increment();
console.log("counter 1 > ", counter1.value()); // 2
console.log("counter 2 > ", counter2.value()); // 1


