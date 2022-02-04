function cat_Function() {
    var part_1 = "My cat";
    var part_2 = "likes to";
    var part_3 = "meow at me";
    var part_4 = "all the time!";
    var cat_meow = part_1.concat(part_2, part_3, part_4);//concatenate function placing chosen parts together to dispay
    document.getElementById("cat").innerHTML = cat_meow
}

function slice_Method() {
    var Sentence = "I just got a new juicer";
    var Section = Sentence.slice(13,17);
    document.getElementById("slice").innerHTML = Section;//slice method, extracting one part/slice of the sentence to display that 
}

let text = "Hello Kitty";
let result = text.toUpperCase();//making all text Upper case

document.getElementById("demo").innerHTML = result;

let text1 = "Mr. Blue has a blue house"
let position = text1.search("Blue");

document.getElementById("demo1").innerHTML = position;//search method to search for "Blue"

function string_Method() {
    var X =170;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();//toString method. number method
}


function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);//toPrecision method
}

let num = 7.56789;
let n = num.toFixed();

document.getElementById("demo2").innerHTML = n;




function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {///having a hard time with valueOf, several ways online to do it, none seem to work for me
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  
  console.log(object1 + 3);
  // expected output: 7, I don't see this even in console