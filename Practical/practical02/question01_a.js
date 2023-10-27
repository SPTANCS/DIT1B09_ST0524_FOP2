function typeOfPet() {
    var pet_type = "dog";

    function myPet() {
        var other_pet = "cat";
        console.log("My pet is a " + pet_type);
        // "I am in outer function"
    }
    myPet();
}

typeOfPet();
