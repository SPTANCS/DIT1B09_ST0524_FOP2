function myStack() {
    const items = [];

    let returnObj = {
        push:       function (item) {
                        items.push(item);
                    },
        pop:        function () {
                        return items.pop();
                    },
        display:    function () {
                        return items;
                    },
        getItem:    function (index) {
                        return items[index];
                    },
        empty:      function() {
                        items.length = 0;
                    }
    }
    return returnObj;
}

const stack = myStack();
stack.push(3)
stack.push(2)
stack.push(1)
console.log(stack.display());

stack.length = 0; // Does nothing
console.log(stack.display()); 
console.log(stack.length); 

const stack2 = myStack();
stack2.push(99);
console.log(stack2.display()); 

console.log(stack.getItem(1));
stack.empty();
console.log(stack.display());


