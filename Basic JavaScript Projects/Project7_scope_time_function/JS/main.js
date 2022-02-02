


var X = 15;//global  variable will impact all 
function Add_numbers_1() {
    document.write(5 + X + "<br>");
}
function Add_numbers_2() {
    document.write( X + 4);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 10;//local variable will only be in this function
    document.write(10 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {//errorr console log statement
    console.log(Y + 100);
}
Add_numbers_1();
Add_numbers_2();



function get_Date() {//get date/time function,dependent on time of day user has
    if (new Date().getHours() <12) {
document.getElementById("Hello").innerHTML = "Good Morning, need coffee?";
    }
}

if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";//if statement
  }



function IQ_Function() { //if and else condition
    IQ = document.getElementById("IQ").value;
    if (IQ >= 110) {
        Vote ="You are able to vote!";
     }
     else {
         Vote ="You are not able to vote!";
     }
     document.getElementById("What_is_your_IQ?").innerHTML = Vote;//because there should be a restriction on this to vote
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//time function from slides
}
