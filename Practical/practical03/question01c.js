function Person(name = "John", age = 18) {
    this.name = name,
    this.age = age,
    this.sayName = function (msg) {
        console.log(msg);

        console.log("Your age is " + this.age);
        let msgToEnquiry = () => {
            if (this.age < 18) {
                console.log("You are not required to report to CMPB for enlistment");

            } else {
                console.log("You are required to report to CMPB for enlistment");
            }
        }
        msgToEnquiry();
    }
}

const x = new Person();
console.log(x);
x.sayName('Check your eligible age');
