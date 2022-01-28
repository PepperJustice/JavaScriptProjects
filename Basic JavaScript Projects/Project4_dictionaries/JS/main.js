function my_Dictionary() {
    var Animal = {
        Species:"Cat",//key value pairs
        Color:"Calico",
        Breed:"Fluffy",
        Age: 7,
        Sound:"Meow!"
    };
    delete Animal.Sound;//deleted key this will display undefined instead of meow
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//display animal sound-meow
}