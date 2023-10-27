function myStack() {
    const items = [];

    return items;
}

const stack = myStack();

stack.push(3)
stack.push(2)
stack.push(1)

console.log(stack);

stack.length = 0;         // erases the stack

console.log(stack);
