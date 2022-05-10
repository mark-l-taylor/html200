let fruit = ['apple', 'pear', 'strawberry', 'kiwi', 'banana']
console.log(fruit)

console.log('\nAdd and element to the end of the array')
fruit.push('raspberry')
console.log(fruit)

console.log('\nRemove the third element...strawberry')
fruit.splice(2, 1)
console.log(fruit)

console.log('\nCreate a string from the elements and comma seperate them')
console.log(fruit.join(', '))