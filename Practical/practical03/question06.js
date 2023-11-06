// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const titleCase = (str) => {
    str = str.toLowerCase().split(' ');

    //console.log(str);
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    //console.log(str);

    return str.join(' ');
}

let message = 'all upper case';
let newText = titleCase(message);

console.log("Message :", message);
console.log("New Message :", newText);