// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

console.clear();
console.log("Here 1");
console.log("Here 2");

setTimeout( () => {
    console.log("I am HERE!")
} , 3000 ); // 3 seconds delay

console.log("Here 3");
console.log("Here 4");

