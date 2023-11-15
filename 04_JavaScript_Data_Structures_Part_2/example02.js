let animals = new Map();

// Add keys to the hashmap
animals.set('cat', { sound: 'meow', age: 8 });
animals.set('dog', { sound: 'bark', age: 10 });
animals.set('bird', { sound: 'tweet', age: 2 });
animals.set('whale', { sound: 'whistles', age: 2 });
animals.set('cow', { sound: 'moo', age: 5 });


console.log(animals);
console.log(animals.get('dog'));
animals.delete('whale');
console.log(animals);

console.log("=======================");

animals.forEach((value, key) => {
    console.log(`This ${key} is ${value.age} years old, the ${key} ${value.sound}`);
});
