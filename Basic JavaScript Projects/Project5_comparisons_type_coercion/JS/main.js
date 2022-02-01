document.write(typeof 3)//coercion
document.write("15" + 10);//coercion
document.write(3E540)//infinity

document.write(-4E450)//-infinity

function my_Function() {
    document.getElementById("test").innerHTML = 0/0;
    document.getElementById("test").innerHTML= isNaN('this is a string');//using NaN 
}

document.write(10>5);//true

document.write(50>100);//false

console.log(4+4);//use console log to add, display 8

console.log(4>7);//use console log to display false

document.write(5==5);//check data, compare L to ride side T

document.write(4==10);//F

X = 5;
Y = 5;
document.write(X === Y);//use triple equal to display true same number/value same type 

A = 5;
B = "7";
document.write(A === B);//use triple equal to display false different types different number

C = 5;
D = "5";
document.write(C === D);//use triple equal to display false different types same number

E = 5;
F = 0;
document.write(E === F);//use triple equal to display false

document.write(4>1 && 10>4);//to display true using AND operator
document.write(4<1 && 10<4);//to display false using AND operator

document.write(5>10 || 5>1);//to display true using OR operator
document.write(5>10 || 5>20);//to display false using OR operator

function not_Function(){
    document.getElementById("Not").innerHTML = !(20>10);//using function NOT to display false on event click
}

