let fruit = ['apple', 'pear', 'strawberry', 'kiwi', 'banana'];
console.log(fruit);

for (let i = 0; i < fruit.length; i++){
    console.log([i, fruit[i]].join(', '));
}