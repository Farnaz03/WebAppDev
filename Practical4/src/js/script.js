let userName = "Matevz"
let userAge = 21


userPets = ["Cat", "Dog"]
var userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
var everyDaySpendingPerPet = 2.4
var daysSurvived = 0


//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)

console.log("User Balance", userBalance)
console.log("Everyday Spending", everyDaySpendingPerPet)
console.log("Days Survived", daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")
console.log(" ")

// Task #1
console.log("Task #1")
function nameVertical(name) {

    console.log(name);
    let nameLength = name.length;

    for (i = 0; i < nameLength; i++) {
        console.log(name[i]);
    }
}

nameVertical("Sarah");

console.log(" ")

// Task #2
console.log("Task #2 -takes a number and returns its HTTP response status")
function code(n) {
    return           (n < 100) ? "Not a valid code" :
        (100 <= n && n <= 199) ? "Informational responses" :
        (200 <= n && n <= 299) ? "Successful responses" :
        (300 <= n && n <= 399) ? "Redirection messages" :
        (400 <= n && n <= 499) ? "Client error responses" :
        (500 <= n && n <= 599) ? "Server error responses" :
        "Not a valid code"
}
    //for example 404
console.log("404:", code(404));

console.log(" ")
// Task #3
console.log("Task #3 - takes two variables and compares them")

function compareVariables(var1, var2) {
    console.log("var1= " + var1);
    console.log("var2= " + var2);

    if (var1 === var2) {
        console.log("the two variables have the same value and type");
    } else if (var1 == var2) {
        console.log("the two variables have the same value but not the same type");
        console.log("the type of " + var1 + " is " + typeof var1);
        console.log("the type of " + var2 + " is " + typeof var2);
    } else {
        console.log("the two variables do not have the same value nor the same type");
    }
}

// After completing the function pass different values instead of var1 and var2 and test the result
compareVariables(3, '3')

console.log(" ")
// Task #4
console.log("Task #4 - Fibonacci Sequence")
function fibonacci(n) {
    let n1 = 0,
        n2 = 1,
        nextNumber;
    
    //console.log('Fibonacci Sequence:');
    console.log(n1); // print 0
    console.log(n2); // print 1
    
    nextNumber = n1 + n2;
    
    while (nextNumber <= n) {
    
        // print the next number
        console.log(nextNumber);
    
        // calculate the next number
        n1 = n2;
        n2 = nextNumber;
        nextNumber = n1 + n2;
    }
    }
 // Insert a number instead of n to test your function
    fibonacci(5);
    