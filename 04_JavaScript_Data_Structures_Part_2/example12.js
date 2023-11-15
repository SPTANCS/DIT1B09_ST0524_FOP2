let user = {
    firstName: 'Pamela',
    lastName: 'Lee',
    age: 35,
};

function printLabel({firstName, lastName}) {
    console.clear();
    console.log(`Name : ${lastName} ${firstName}`);
}

// function printLabel2(user) {
//     console.clear();
//     console.log(`Name : ${user.lastName} ${user.firstName}`);
// }


printLabel1(user);