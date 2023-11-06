let personArry = [
    {name: "John", yearOfBirth: 1999}
    , {name: "Mary", yearOfBirth: 2010}
    , {name: "Peter", yearOfBirth: 2013}
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let older20 = personArry.filter( (person) => {
    const age = new Date().getFullYear() - person.yearOfBirth;
    return (age > 20);
} );

console.clear();
console.log(older20);