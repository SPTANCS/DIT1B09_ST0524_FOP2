let user1 = {
    firstname: 'Pamela',
    lastname: 'Lee',
};

// Before add age
console.log("Original object : ");
console.log(user1);

let user2 = { ...user1, firstname: 'John' , age: 31 };
// After add age

console.log("age added into the original object : ");
console.log(user1);
console.log(user2);
