// Define a function:
function showLastName() {
    const lastName = "Xing Ying";
    return lastName;
}

// Define another function:
function displayFullName() {
    const fullName = "Jane Chan" + lastName;
    return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
// "Uncaught ReferenceError: lastName is not defined"
