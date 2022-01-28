

function addition_Function() {
    var addition = 2+2;//add numbers
    document.getElementById("math").innerHTML ="2+2="+ addition;
}

function sub_Function(){
    var subtraction = 3-3;//subtract numbers
    document.getElementById("math2").innerHTML ="3-3 =" + subtraction
}

function mult_Function() {
    var simple_Math = 5 * 5;//multiplication
    document.getElementById("math3").innerHTML="5 * 5 = " +
    simple_Math;
}

function division_Function(){
    var simple_Math = 480/60;//division 
    document.getElementById("math4").innerHTML="480 / 60 = " +
    simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 2) * 5 / 10;//
    document.getElementById("maths").innerHTML = "2 plus 2, multplied by 5, divided by 10 equals" + simple_Math;
}

function Modulus_Operator() {
    var simple_Math = 37 % 3;//remainder displayed
    document.getElementById("math5").innerHTML = "When you divide 37 by 3 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("math6").innerHTML = -x;//opposite, display -10
}

var X = 4;
X++;
document.write(X)//disply increment

var Y = 6.75;
Y--;
document.write(Y)//display decrement

window.alert(Math.random()*100);//alert pop up random number between 1-100

document.getElementById("round").innerHTML = Math.round(4.6);//not sure why this won't work in here, only in the HTML script, can you tell me what is missing? 