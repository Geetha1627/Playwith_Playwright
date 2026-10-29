let num = -7;

if (num === 0) {
    console.log("The number is Zero");
} 
else if (num > 0 && num % 2 === 0) {
    console.log("Positive Even Number");
} 
else if (num > 0 && num % 2 !== 0) {
    console.log("Positive Odd Number");
} 
else if (num < 0 && num % 2 === 0) {
    console.log("Negative Even Number");
} 
else {
    console.log("Negative Odd Number");
}