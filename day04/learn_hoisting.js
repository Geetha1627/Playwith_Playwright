// Hoist - down to top

console.log(courseName) // Undefined
var courseName = "Playwright"
// can't use const or let it throws ReferrenceError

console.log(courseName) //Playwright

