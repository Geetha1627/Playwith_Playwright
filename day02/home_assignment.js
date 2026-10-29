//var, let, const 
var mark = 100; // can be anything int, float, negative numbers, boolean, string, null, undefined
console.log(mark); //100 
console.log(typeof mark); //number, typeof operator is used to find the datatype of the variable

var clientName = "Testleaf";
console.log(clientName); // Testleaf
console.log(typeof clientName) //string

//Undefined
var clientAddress;
console.log(typeof clientAddress); //undefined

//Null - purposefully assigned to a variable to indicate that it has no value
var clientPhone = null;
console.log(clientPhone); // null
console.log(typeof clientPhone); //object

var maxNum = Number.MAX_SAFE_INTEGER
console.log(maxNum); //9007199254740991

// example of MAX_SAFE_INTEGER
var largeNum = 9007199254740991;
console.log(largeNum); //9007199254740991

var largeNum1 = 9007199254740995;
console.log(largeNum1); //9007199254740996 wrong values will be printed 

//bigInt type with suffix n
var bigIntNumber = 675n + 768n;
console.log(bigIntNumber);
console.log(typeof bigIntNumber)

//boolean type
var boolValue = true
console.log(boolValue)
console.log(typeof boolValue)