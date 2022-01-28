function My_First_Function() {
    var str = "This is the button Text!";//create a button
    document.getElementById("button_text").innerHTML =str;//get by id of button text
}

function myFunction() {
    var sentence ="I am learning";//first part of sentence to display
    sentence += "a lot from the book!";//second part
    document.getElementById("concatenate").innerHTML = sentence;//will go together once clicked on and display both together
}