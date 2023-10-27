const fullName = "Sally Chan";

// Define nested functions:
function profile() {
    console.log("profile");
    function sayName() {
        console.log("sayName");
        function writeName() {
            console.log("writeName");
            return fullName;
        }
        console.log("return writeName");
        return writeName();
    }
    console.log("return sayName");
    return sayName();
}

console.log("Start of function call profile()");
console.log(profile());
