function Candidate() {
    this.title = "Mdm.";
    this.firstname = "Amy";
    this.lastname = "Chow";

    this.call = function () {
        console.log(this.title + " " + this.firstname
            + " " + this.lastname
            + " is requested to go to Interview Room 1");
    }
}
const candidate = new Candidate();

console.log(typeof candidate); // object
// accessing the object value
console.log(candidate.title);
console.log(candidate.firstname);
candidate.call();

