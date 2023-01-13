
let person = {
    name:"mohamed",
    age:26
}


// (1) hasOwn()
// it checks if the object has its own propetry or not it will return false in case this prop is inherited
// it returns true or false

console.log(Object.hasOwn(person, 'name'))  // true
console.log(Object.hasOwn(person, 'city'))  // false

// (2) values()
// it creates new array of objects values
// it returns array of values

console.log(Object.values(person)) // [ 'mohamed', 26 ]

// (3) keys()
// it creates new array of objects keys
// it returns array of keys

console.log(Object.keys(person)) //[ 'name', 'age' ]


// (4) entries()
// it creates new array of a given object's own string-keyed property key-value pairs each one of them is an array
// it returns array of key-value pairs

console.log(Object.entries(person)) ; // [ [ 'name', 'mohamed' ], [ 'age', 26 ] ]

// (5) create()
// it creates a new object using an existing object as the prototype of the newly created object
// it returns new object

let obj = Object.create(person);
console.log(obj.name);    // mohamed


// (6) defineProperties()
// it defines new or modifies existing properties directly on an object
// it returns same object but with modification

Object.defineProperties(obj ,{ city: {
    value: "alex",
    writable: false}})
obj.city = "cairo"         // not changable because writable is false   
console.log(obj.city); // alex


// (7) getOwnPropertyNames()
// it acts like object.keys it create new array of all prps names
// it returns array of keys

console.log(Object.getOwnPropertyNames(person));  // [ 'name', 'age' ]



// (9) freeze()
// it makes the object can not be changable or extendable
// it returns The object that was passed to the function.

Object.freeze(person);
person.age = 25 ;    
console.log(person.age)  // 26  it is not changable



// (10) isfreeze()
// it check if this objects is freezed or not 
// it returns true or false
   
console.log(Object.isfreeze(person))  // true