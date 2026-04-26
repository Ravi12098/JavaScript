
function sayMyname(){
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
}

sayMyname()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(2, 3)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ravi"))
console.log(loginUserMessage());

function calculateCartPrice( ...num1 ){
    return num1
}

console.log(calculateCartPrice(200, 300, 499));


const user = {
    username: "Ravi" ,
    class: 12
}

function handleObject(anyobject){
    console.log(`Usernmae is ${anyobject.username} and class is ${anyobject.class}`);
    
}

// handleObject(user)
handleObject({
    username: "Monu" ,
    class: 12
})

const myNewArray = [200, 100, 300, 400]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
