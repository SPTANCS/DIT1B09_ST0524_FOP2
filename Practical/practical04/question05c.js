// program to create JavaScript object using instance of an object
const student = {
    name: 'John',
    "my age": 20,
    "my hobbies": ['reading', 'games', 'coding'],
    "say Hi": function () {
        return "I am " + this.name + " and my age is " + this["my age"];
    },
    "subject score": {
        maths: 90,
        science: 80
    }
};

console.clear();
console.log(typeof student);
console.log(student.name);
console.log(student["say Hi"]());
console.log(student["subject score"].maths);