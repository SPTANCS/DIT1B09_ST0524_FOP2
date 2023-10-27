function createCounter(startcount) {

    let counter = startcount;
    
    function double_increment() {
        // access the counter variable in outer function
        counter *= 2;
    }
    
    double_increment();
    
    return counter;
}

console.log("The counter value is " + createCounter(5));
