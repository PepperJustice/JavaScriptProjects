function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X <16) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;//while loop function
}

let text = "The Big Lebowsky";
let length = text.length;//let keyword and text length

document.getElementById("dude").innerHTML = length;

var Instruments = ["flute", "piano", "bongos", "harp", "violin", "triangle"];//For loop function
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_Function() {
    var cat_face = [];
    cat_face[0] = "meow";
    cat_face[1] = "barf";
    cat_face[2] = "cause destruction";
    document.getElementById("Array").innerHTML = "My cat likes to" + cat_face[1] + "."//array and objects
}

function constant_function() {
    const Morning_Yoga = {type: "Power yoga", length:"60mins", heat: "hot"};
    Morning_Yoga.fee = "$20";
    Morning_Yoga.level= "intermediate";
    Morning_Yoga.length = "55mins"
    document.getElementById("Constant").innerHTML = "The length of the" + Morning_Yoga.type + "is" + Morning_Yoga.length;//const function with changed values

}
function myFunction() {
    return Math.PI;
  }
  
  document.getElementById("math").innerHTML = myFunction();

  let yoga = {
      style: "Ashtanga",
      length: "2hour",
      level: "Primary series-intermediate",
      fitness: "intense physical", 
      description: function()  {
          return "This yoga is an " + this.style +  this.length + this.level + this.fitness + "practice!";//create object using let
      }
  };
  document.getElementById("yoga_object").innerHTML = yoga.description();

  let text1 = "";
for (let i = 0; i < 10; i++) {
  if (i === 5) { break; }
  text1 += "The number is " + i + "<br>";//break statement
}

document.getElementById("demo").innerHTML = text1;

let text2 ="";
for (let c = 0; c < 10; c++){
    if (c === 5){continue}
    text2 += "The number is" + c + "<br>";
}
document.getElementById("demo2").innerHTML =text2;//continue statement
