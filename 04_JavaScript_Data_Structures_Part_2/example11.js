let user = {
    firstName: 'Pamela',
    lastName: 'Lee',
    age: 35,
};

let {firstName : fn, lastName : ln} = user;

console.clear();
console.log(fn);
console.log(ln);

let { firstName, ...rest } = user;
console.log("The value of firstname");
console.log(firstName);

console.log("The value of ...rest");
console.log(rest);
