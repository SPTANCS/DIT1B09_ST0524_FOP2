const candidate = new Object({
    title: "Mr.",
    firstname: "Paul",
    lastname: "Lee",
    call: function () {
        console.log(this.title + " " + this.firstname + " "
            + this.lastname
            + " is requested to go to Interview Room 1");
    }
});
console.log(typeof candidate); // object
// accessing the object value
console.log(candidate.title);
console.log(candidate.firstname);
candidate.call();
