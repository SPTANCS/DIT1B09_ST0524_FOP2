function outer() {
    var b = 10;
    function inner() {
        var a = 20;
        //b = b + a;
        b += a;
        console.log(b);
    }
    return inner;
}
var X = outer(); //outer() invoked the first time

console.log(typeof (X)); //X is of type function

X();
X();
X();
