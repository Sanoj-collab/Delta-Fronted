// PQ 1
let color = "yellow";

if(color == "red"){
    console.log("Stop.Traffic light is red !");
}
if(color == "yellow"){
    console.log("Slow down.Traffic light is yellow !");
}
if(color == "green"){
    console.log("Go.Traffic light is green !");
}

// PQ 2
let size ="XL";
if(size == "XL"){
    console.log("Price of the popcorn is : 250");
}
else if(size == "L"){
    console.log("Price of the popcorn is : 200");
}
else if(size == "M"){
    console.log("Price of the popcorn is : 100");
}
else{
    console.log("Price of the popcorn is : 50");
}

// PQ 3

let string = "again";
if(string.length > 3 && string[0] == "a"){
    console.log("Good String");
}else{
    console.log("Not a good string");
}

// PQ 4
let num = 12;
if((num % 3 === 0) && ((num + 1 == 15) || (num -1 == 11))){
    console.log("Safe");
}else{
    console.log("Unsafe");
}

// PQ 5
let day = 5;

switch(day){
    case 1: 
    console.log("Monday");
    break;
    case 2: 
    console.log("Tuesday");
    break;
    case 3: 
    console.log("Wednesday");
    break;
    case 4: 
    console.log("Thursday");
    break;
    case 5: 
    console.log("Friday");
    break;
    case 6: 
    console.log("Saturday");
    break;
    default:
        console.log("Sunday");
}

// alert("Something is wrong!");
// console.error("Error Invalid");
// console.warn("This is warning msg.")
// prompt("Enter your id");

// let name = prompt("Enter your name");
// console.log(name);

// let firstName = prompt("Enter your firstName");
// let lastName = prompt("Enter your lastName");

// console.log("Thnkx to visit us", firstName,lastName);

// AQ 1
let num1 = 20;
if(num1 % 10 == 0){
    console.log("Good");
}
else{
    console.llog("Bad");
}

// AQ 2
let userName = prompt("Enter username");
let age = prompt("Enter your age");

console.log(userName +" is" ,age + " year old.");

// AQ 3
let quarter = 1;
switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, Septumber");
        break;
    default:
        console.log("Octuber, November, December");
}

// AQ 4
let string1 = "Appnaa";
if(string1.length > 5 && ((string1[0] == "A") || (string1[0] == "a"))){
    console.log("Golden String");
}
else{
    console.log("Not a golden String.")
}

// AQ 5
let a = 10, b = 240, c = 30;
if(a > b && a > c){
    console.log( a, " is the largest number");
}else if(b > a && b > c){
    console.log(b, " is the largest number");
}
else{
    console.log(c, " is the largest number.")
}

// AQ 6
let num2 = 323, num3 = 47852;
if(num2 % 10 == num3 % 10){
    console.log("Last digit is same of the both numbers.")
}else{
    console.log("Last digit of the both numbers are not same.");
}