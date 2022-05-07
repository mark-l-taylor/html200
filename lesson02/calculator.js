const x = 12;
const y = -2.5;
const z = '2';
const w = 5e3;
console.log(`x= ${x}, y= ${y}, z= '${z}', w= 5e3`);

console.log('\nx + y');
console.log(x + y);

console.log('\nx - y');
console.log(x - y);

console.log('\nw - x, using scientific notation for numbers also works');
console.log(w - x);

console.log('\nz + x  adding a string and a number, concatenates');
console.log(z + x);

console.log('\nx + z  adding a string and a number concatenates regardless of order');
console.log(x + z);

console.log('\nx * y');
console.log(x * y);

console.log('\nz * x  multiplying a string and a number, converts the string to a number');
console.log(z * x);

console.log('\nx * z  multiplying a string and a number, converts the string to a number');
console.log(x * z);

console.log('\nx / y');
console.log(x / y);

console.log('\nz / x  dividing a string and a number, converts the string to a number');
console.log(z / x);

console.log('\nx / z  dividinging a string and a number, converts the string to a number');
console.log(x / z);

console.log('\nx ** z exponentiation by a string,  converts the string to a number');
console.log(x ** z);

console.log('\nx % y');
console.log(x % y);

console.log('\n (x + (y * z))/w');
console.log((x + (y * z))/w );
