function Ride_Function() {//ternary operation example
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function vote_Function() {//ternary operation vote
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";
}

function yoga(style, length, sweat, meditation) {//this keywords constructor
    this.yoga_style = style;
    this.yoga_length = length;
    this.yoga_sweat = sweat;
    this.yoga_meditation = meditation;
    }

    var Ashtanga = new yoga("power", "2hours", "lots", "high");//using keywords this and new
    var Yin = new yoga("slow", "1hour", "little", "some");
    var Vinyasa =new yoga("fast flow", "30-1hour", "lots", "maybe");
    function yoga_Function() {
        document.getElementById("keywords").innerHTML =
        "Ashtanga yoga is a " + Ashtanga.yoga_style + "practice" + Ashtanga.yoga_length + "and you will sweat" + Ashtanga.yoga_sweat;
    }

    function Vehicle(Make, Model, Year, Color) {//using this for keywords to construct
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }

var jack = new Vehicle("Dodge", "Viper", 2020, "Red");//keywords new and this example
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    "manufactured in " + Erik.Vehicle_Year;
}
function count_Function() {//nested function example
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var starting_point = 9;
        function Plus_one() {starting_point+= 1;}
        Plus_one();
        return starting_point;
    }
}
    
function This_Function() {//nested function used in a different element
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var starting_point = 9;
        function Plus_one() {starting_point+= 1;}
        Plus_one();
        return starting_point;
    }
}