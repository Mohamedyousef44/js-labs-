
let arr = [1,2,3,4]

// (1) fill()
// it changes the array elements to static value from start index to end index
// it returns the modified array

console.log(arr.fill(0,1,4));  // [1,0,0,0]

// (2) from()
// it creats new array from object you pass to it 
// it returns the modified array

console.log(Array.from('ahmed'));  // [ 'a', 'h', 'm', 'e', 'd' ]


// (3) isArray()
// it checks the passed object is array or not 
// it returns true or false

console.log(Array.isArray(arr)); // expexted is true

// (4) toString()
// it convert array into string 
// it returns string of the passed array

console.log(arr.toString());  // "1,0,0,0"

// (5) some()
// it checks if at least one element pass the test function you passed it as input 
// it returns true or false

console.log(arr.some((x)=> x == 0)); // true
console.log(arr.some((x)=> x == 5)); // false


// (6) reverse()
// it reverse the array elements in place  
// it returns new reference to the original array but reversed

let arr2 = arr.reverse();
console.log(arr2);  // [0,0,0,1]

// (7) Array.of()
// it creates a new array with the values you pass to it it acts like Array constructor but it creats array not empty slot  
// it returns new reference to the array you want

arr2 = Array.of(6,7,8,9)
console.log(arr2);              // [ 6, 7, 8, 9 ]






