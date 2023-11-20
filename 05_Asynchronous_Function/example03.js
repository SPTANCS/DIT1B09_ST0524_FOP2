// 1000 - 2000 - 3000 - 4000 or 5000
function randomDuration() {
    return (Math.floor(Math.random() * 5) + 1) * 1000;
}

console.clear();
setTimeout( () => { console.log("1") } , randomDuration());
setTimeout( () => { console.log("2") } , randomDuration());
setTimeout( () => { console.log("3") } , randomDuration());
setTimeout( () => { console.log("4") } , randomDuration());
setTimeout( () => { console.log("5") } , randomDuration());

console.log("Start!---");