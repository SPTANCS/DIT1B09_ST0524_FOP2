//Object Literal
const candidate = {
    title: "Ms.",
    firstname: "Mandy",
    lastname: "Tan",
    call: function () {
        console.log(this.title + " " + this.firstname + " " +
            this.lastname + " is requested to go to Interview Room 1");
    }
};

const candidate2 = {
    title: "Mr.",
    firstname: "Peter",
    lastname: "Tan",
    call: function () {
        console.log(this.title + " " + this.firstname + " " +
            this.lastname + " is requested to go to Interview Room 1");
    }
};

console.log(candidate.title);
candidate.call();
candidate2.call();
