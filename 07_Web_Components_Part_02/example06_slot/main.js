const userArray = [
    {
        name: "Tan Chee Seong",
        contact: "68704675",
        email: "tan_chee_seong@sp.edu.sg",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
    },
    {
        name: "Mary",
        contact: "123456789",
        email: "mary@gmail.com",
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
    },
    {
        name: "John See",
        contact: "987654321",
        email: "john@gmail.com",
        details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making"
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

        const contactDetails = document.createElement('span');
        contactDetails.setAttribute('slot', 'moreInfo');
        contactDetails.textContent = user.details;
        
        newNameCard.append(contactDetails);

        nameCardDiv.append(newNameCard);
    });
}