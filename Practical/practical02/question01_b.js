function typeOfPet() {
    var pet_type = "dog";
    console.log("My pet is a " + other_pet);

    function myPet() {
        var other_pet = "cat";

        console.log("My pet is a " + pet_type);
        // "I am in outer function"
    }
    myPet();
    // var other_pet = "rabbit";
}

typeOfPet();
