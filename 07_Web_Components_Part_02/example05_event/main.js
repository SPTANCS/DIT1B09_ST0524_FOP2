const userArray = [
    {
        name: "Tan Chee Seong",
        contact: "68704675",
        email: "tan_chee_seong@sp.edu.sg"
    },
    {
        name: "Mary",
        contact: "123456789",
        email: "mary@gmail.com"
    },
    {
        name: "John See",
        contact: "987654321",
        email: "john@gmail.com"
    }
];

function loadCards() {
    console.log("creating the namecards.....");

    const nameCardDiv = document.querySelector("#namecards");

    userArray.forEach(user => {
        const newNameCard = document.createElement("name-card");
        newNameCard.setAttribute("username"   , user.name);
        newNameCard.setAttribute("usercontact", user.contact);
        newNameCard.setAttribute("useremail"  , user.email);

        nameCardDiv.append(newNameCard);
    });
}