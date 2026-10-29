// Operators
//  -, +, *, /, =, ==(comparision), ++(increment), --(decrement), %

var a = 50
var b = 20

console.log("addition of a+b", a+b) // 70
console.log("subtraction of a-b", a-b) //30
console.log("division of a/b", a/b) // returns Quotient with decimal points output 2.5
console.log("division of a and b without decimal point" ,Math.floor(a/b)) // 2
console.log("subtraction of a*b", a*b) //100no0
console.log("subtraction of a%b", a%b) // 10
console.log("a power 2:", a**2)
// comparision operators ==, <=, <, >=, >, != output returns true or false
console.log(a>b) // true

// increment ++var (pre increment), var++ (post increment)
c = 7
console.log(c++) // prints 7
console.log(c) // 8
console.log(++c) // 9

// logical operators AND (&&) and OR(||)
console.log(10>20 && 20>10) //false
console.log(10>20 || 20>10) //true
