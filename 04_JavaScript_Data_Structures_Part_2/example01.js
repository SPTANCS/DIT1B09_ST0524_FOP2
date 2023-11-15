// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

let map = new Map();
map.set('1', 'One');    // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'login'); // a boolean key
map.set(false, 'loginError'); // a boolean key

console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(false));
