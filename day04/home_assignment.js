function find_odd_and_even_numbers(){
    for(let i=1; i<=20; i++){
        if (i === 0) {
            console.log("The number is Zero");
        } 
        else if (i > 0 && i % 2 === 0) {
            console.log("Positive Even Number");
        } 
        else if (i > 0 && i % 2 !== 0) {
            console.log("Positive Odd Number");
        } 
        else if (i < 0 && i % 2 === 0) {
            console.log("Negative Even Number");
        } 
        else {
            console.log("Negative Odd Number");
        }
    }
}

find_odd_and_even_numbers()