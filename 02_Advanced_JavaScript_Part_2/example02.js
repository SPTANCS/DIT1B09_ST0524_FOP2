function showLastName() {
    const lastName = "Xing Ying";
    return lastName;
}

// Define another function:
function displayFullName() {
    const fullName = "Jane Chan" + showLastName();
    return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return: “Jane Chan Xing Ying"
