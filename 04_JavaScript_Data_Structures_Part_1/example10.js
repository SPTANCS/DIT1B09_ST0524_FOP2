function Candidate(title, firstname, lastname) {
    this.title     = title;
    this.firstname = firstname;
    this.lastname  = lastname;

    this.call = function () {
        console.log(this.title + " " + this.firstname
            + " " + this.lastname
            + " is requested to go to Interview Room 1");
    }
}
const candidate1 = new Candidate('Ms.', 'June', 'Lim');
const candidate2 = new Candidate('Mr.', 'Peter', 'Tan');

console.clear();
candidate1.call();
candidate2.call();

