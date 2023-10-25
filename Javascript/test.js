// document.write("This is an external js2")
// document.getElementById('th').innerHTML = "This is a para";
var a1 = 45;
var a2 = "This is me";
var a11 = 5;
// document.write(a1+a11,"<br>");
// document.write(a1, a11,"<br>");
console.log("This is console")
// console.log is used for debugging purposes

// var age = prompt("Tell me your age")
// alert("Your age is : ",age);

/*
document.write("5+9 = ",5+9,"<br>");
document.write("5-9 = ",5-9,"<br>");
document.write("5*9 = ",5*9,"<br>");
document.write("5/9 = ",5/9,"<br>");
document.write("5%9 = ",5%9,"<br>");
*/

// A web app to calculate the cost per person according to the total foodcost and the no. of person given.
/*
var foodcost = prompt("What is the total amount");
var no = prompt("No of people");
document.write("The total cost of food was ", foodcost, "<br>");
document.write("Each one of you has to pay ", (foodcost/no).toFixed(2),"<br>");
// The toFixed funcxtion of js is used to round off the number.
*/

// Some Math functions.
/*document.write("2 ^ 9 = ",Math.pow(2,9),"<br>");
document.write("abs(-34) = ",Math.abs(-34),"<br>");
document.write("sqrt(36) = ",Math.sqrt(36),"<br>");
*/

// Some string fuctions.
/*
var str1 = "Vedansh Gupta";
document.write(str1.length,"<br>");
document.write(str1.indexOf("ansh"),"<br>");
document.write(str1.slice(2,6),"<br>");
document.write(str1.substr(2,5),"<br>");
document.write(str1.toUpperCase(),"<br>");
*/

// If-Else condition.
/*
var age = prompt("What is your age");
if (age<20 && age>=10){
    document.write("You go to school");
}
else if (age<10 && age>3){
    document.write("You also go to school");
}
else{
    document.write("Do whatever you want")
}
*/

// Switch case.
/*
var age = prompt("What is your age? : ");
switch (age) {
    case "22":
        document.write("22 years old... okay");
        break;
    case "21":
        document.write("21 years old... okay");
        break;
    case "12":
        document.write("12 years old... okay");
        break;

    default:
        document.write("default years old... okay");
        break;
}
*/

// Loops in js.
/*
var i=1;
while (i<=100) {
    document.write(i,"<br>");
    i++;
}

for(var i=0;i<2;i++){
    document.write(i,"<br>");
}
*/

// Arrays in js.
/*
var books = ["Harry Potter" , "NCERT" , "CTCI",65];
document.write(books[3]);
*/

// Functions in js.
function Vedansh() {
    document.write("We are calling Vedansh...");
    console.log("We have executed Vedansh functions")
}
Vedansh();