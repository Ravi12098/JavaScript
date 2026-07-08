function name() {
    console.log("Ravinder");
}

name();
name();

function num1to5() {
    for ( let i = 1; i <= 5; i++){
        console.log(i);
    }
}

num1to5();

function isAdult() {
    let age = 18;
    if(age >=18) {
        console.log("adult");
    }else {
        console.log("not adult");
    }
}

isAdult();

// function with arguments

function printInfo(name, age) {
    console.log(name, age);   
}

printInfo("Ravi", 21);

function multipleGreet(func, count) {
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 5);

// this 

const student = {
    name: "ravi",
    age: 21,
    eng: 40,
    math: 46,
    phy: 34,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this>this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}

// arrow functions

const sum = (a, b) => {
    console.log(a + b);
};

const add = (a, b) => (a + b);
